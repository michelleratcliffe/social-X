import { connect } from "@/lib/connect";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import {
  Container,
  Flex,
  Heading,
  Text,
  Button,
  Card,
  Avatar,
  Box,
  Badge,
} from "@radix-ui/themes";
import {
  ChatBubbleIcon,
  CookieIcon,
  HeartFilledIcon,
  HeartIcon,
} from "@radix-ui/react-icons";

export default async function PostsPage() {
  // const user = await currentUser()
  // const userImage= user?.imageUrl;
  // console.log(userImage)

  // get the user ID from clerk
  const { userId } = auth();

  const db = connect();
  const posts = await db.query(`
    SELECT
        posts.id,
        profiles.username,
        posts.content,
        profiles.profile_image
        FROM posts
    INNER JOIN profiles ON posts.clerk_id = profiles.clerk_id;
    `);

  async function handleCreatePost(formData: object) {
    "use server";
    const db = connect();
    // get the content from the form
    const content = formData.get("content");
    // console.log(content)

    // add the post to the database
    await db.query(`INSERT INTO posts (clerk_id, content) VALUES ($1, $2)`, [
      userId,
      content,
    ]);
    revalidatePath("/posts");
  }

  return (
    <Box className="flex min-h-screen flex-col items-center justify-between p-24">
      <Container size="4">
        <Flex align="center" direction="column" pb="4">
          <Heading content="Posts">Our Posts</Heading>
          <Text>Add New Post:</Text>
        </Flex>

        <Flex gap="4" direction="column" pb="4">
          <Card>
            <div className="text-lime-500 m-4 p-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
              <form action={handleCreatePost}>
                <label className="sr-only"></label>
                <textarea
                  name="content"
                  placeholder="New Post"
                  className="p-3 w-full focus:outline-none"
                ></textarea>

                <Button className="p-3 w-full focus:outline-none">
                  Submit
                </Button>
              </form>
            </div>
          </Card>
        </Flex>

        <Flex gap="4" direction="column" pb="4">
          <Card>
            <Heading>All Posts</Heading>
          </Card>
        </Flex>

        <Flex gap="4" pt="2" pb="2" direction="column">
          {posts.rows.map((post: any) => {
            return (
              <Box>
                <Card key={post.id}>
                  <Flex gap="6" align="center">
                    <Avatar
                      size="6"
                      src={`${post.profile_image}`}
                      radius="full"
                      fallback="T"
                      color="indigo"
                    />
                    <Box>
                      <Text as="div" size="6" weight="bold">
                        {post.username} says:
                      </Text>
                      <Text as="div" size="4" color="gray">
                        Engineering
                      </Text>
                      <Flex gap="2" className="pt-2 pb-2">
                        <Badge color="orange">Design</Badge>
                        <Badge color="crimson">UI</Badge>
                      </Flex>
                      <Text size="4" as="p">
                        {post.content}
                      </Text>
                      <Flex justify="center" pt="4">
                        <Flex align="center">
                          <ChatBubbleIcon />
                          <Text color="gray" ml="4" size="1">
                            3 comments
                          </Text>
                        </Flex>
                        <HeartIcon className="justify-self-end" />
                        {/* <HeartFilledIcon /> */}
                      </Flex>
                    </Box>
                  </Flex>
                </Card>
              </Box>
            );
          })}
        </Flex>
      </Container>
    </Box>
  );
}

{
}
