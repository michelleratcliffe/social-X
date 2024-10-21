import { connect } from "@/lib/connect";
import { auth, currentUser } from "@clerk/nextjs/server";
import { Flex, Text, Button } from "@radix-ui/themes";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import "./profile.css";
import { redirect } from "next/navigation";

export default async function ProfilePage() {
  const { userId } = auth();
  const user = await currentUser();

  async function handleUpdateProfile(formData: FormData) {
    "use server";
    // console.log(formData);
    // console.log(formData.getAll("interests"));
    const db = connect();
    // get the information from the form
    const username = formData.get("username");
    const bio = formData.get("bio");
    const jobrole = formData.get("jobrole");
    const interests = formData.getAll("interests");

    const userImage = user?.imageUrl;
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
      redirect("/posts");
    }
  }

  return (
    <div
      id="profile-box"
      className="flex min-h-screen flex-col items-center justify-between p-24"
    >
      <Flex direction="column" gap="4">
        <div className="text-white-500 m-4 p-1 bg-gradient-to-r from-cyan-500 to-blue-500 ...">
          <div>
            <h1 className="text-center text-4xl font-spaceGrotesk font-semibold p-10">
              Please update your profile page
            </h1>
            <br />
            <Text className="p-10">
              Please update your details and choose your interests.
            </Text>
            <br />
          </div>
          <form action={handleUpdateProfile} className="p-10">
            <Flex direction="column" gap="2">
              <input name="username" placeholder="Username" className="p-4" />
              <input
                name="jobrole"
                placeholder="What is your current job title"
                className="p-4"
              />

              <Flex direction="row" gap="2">
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Checkbox.Root
                    className="CheckboxRoot"
                    name="interests"
                    value="designer"
                    defaultChecked
                    id="c1"
                  >
                    <Checkbox.Indicator className="CheckboxIndicator">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>

                  <label className="Label p-5" htmlFor="c1">
                    Designer.
                  </label>

                  <Checkbox.Root
                    className="CheckboxRoot"
                    id="c2"
                    name="interests"
                    value="developer"
                  >
                    <Checkbox.Indicator className="CheckboxIndicator">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>

                  <label className="Label p-5" htmlFor="c2">
                    Developer.
                  </label>

                  <Checkbox.Root
                    className="CheckboxRoot"
                    id="c3"
                    name="interests"
                    value="ux"
                  >
                    <Checkbox.Indicator className="CheckboxIndicator">
                      <CheckIcon />
                    </Checkbox.Indicator>
                  </Checkbox.Root>

                  <label className="Label p-5" htmlFor="c3">
                    UX.
                  </label>
                </div>
              </Flex>

              <textarea name="bio" placeholder="Bio" className="p-4"></textarea>

              <Button>Submit</Button>
            </Flex>
          </form>
        </div>
      </Flex>
    </div>
  );
}
