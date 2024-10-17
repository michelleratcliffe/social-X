import { connect } from "@/lib/connect";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Flex, Text, Button } from '@radix-ui/themes'
import { Row } from "@radix-ui/themes/src/components/table.jsx";
import * as RadioGroup from "@radix-ui/react-radio-group";
// import {RadioGroup, Radio} from "@nextui-org/radio";

export default async function ProfilePage() {
  const { userId } = auth();
  const user = await currentUser()

  async function handleUpdateProfile(formData: any) {
    "use server";
    const db = connect();
    // get the information from the form
    const username = formData.get("username");
    const bio = formData.get("bio");
    const jobrole = formData.get("jobrole");
    const interests = formData.get("interests");

    const userImage= user?.imageUrl;
    // console.log(userImage);

    // check whether a profile exists
    const profiles = await db.query(
      `SELECT * FROM profiles WHERE clerk_id = $1`,
      [userId]
    );
    if (profiles.rowCount === 0) {
      // insert our profile into the DB
      await db.query(
        `INSERT INTO profiles (clerk_id, username, bio, profile_image, jobrole, interests) VALUES ($1, $2, $3, $4, $5, $6)`,
        [userId, username, bio, userImage, jobrole, interests]
      );
    } else {
      // update the existing item
      await db.query(
        `UPDATE profiles SET username=$1, bio=$2, jobrole=$4, interests=$5 WHERE clerk_id=$3`,
        [username, bio, userId, jobrole, interests]
      );
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <Flex direction="column" gap="2">
        <h1>Please update your profile page</h1>
        <Text>
          Welcome to Bebo 2. You&apos;re probably a normal person trying to be
          edgy.
        </Text>
      

        <div className="text-white-500 m-4 p-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
          <form action={handleUpdateProfile}>
            <Flex direction="column" gap="2">
            <input name="username" placeholder="Username" height={30}/>
            <input name="jobrole" placeholder="What is your current job title" height={30}/>
            
            <Flex direction="row" gap="2">
            
              <RadioGroup.Root
              name="interests"
              className="RadioGroupRoot"
              defaultValue="Developer"
              aria-label="View density"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RadioGroup.Item className="RadioGroupItem" name="interests" value="Developer" id="r1">
                    <RadioGroup.Indicator className="RadioGroupIndicator" />
                  </RadioGroup.Item>
                  <label className="developer" htmlFor="r1">
                  Developer
                  </label>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RadioGroup.Item className="RadioGroupItem" value="Designer" id="r2">
                    <RadioGroup.Indicator className="RadioGroupIndicator" />
                  </RadioGroup.Item>
                  <label className="designer" htmlFor="r2">
                    Designer
                  </label>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <RadioGroup.Item className="RadioGroupItem" value="UX" id="r3">
                    <RadioGroup.Indicator className="RadioGroupIndicator" />
                  </RadioGroup.Item>
                  <label className="ux" htmlFor="r3">
                    UX
                  </label>
                </div>
              </RadioGroup.Root>
            </Flex>
            <textarea name="bio" placeholder="Bio"></textarea>
            
            <Button>Submit</Button>
            </Flex>
          </form>
        </div>
     
      </Flex>
    </div>
  );
}
