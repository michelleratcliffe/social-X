import { connect } from "@/lib/connect";
import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { Container, Flex, Heading, Text, Button, Card, Avatar, Box, Badge } from "@radix-ui/themes";
import { ChatBubbleIcon, CookieIcon } from "@radix-ui/react-icons";

export default async function PostsPage() {
  // get the user ID from clerk
  const { userId } = auth();

  const db = connect();
  const posts = await db.query(`
    SELECT
        posts.id,
        profiles.username,
        posts.content
        FROM posts
    INNER JOIN profiles ON posts.clerk_id = profiles.clerk_id;
    `);

  async function handleCreatePost(formData: any) {
    "use server";
    const db = connect();
    // get the content from the form
    const content = formData.get("content");
    console.log(content)

    // add the post to the database
    await db.query(`INSERT INTO posts (clerk_id, content) VALUES ($1, $2)`, [
      userId,
      content,
    ]);
    revalidatePath('/posts');
  }

  return (
   <Box className="flex min-h-screen flex-col items-center justify-between p-24">
    <Container size="3" >
     <Flex align="center" direction="column" pb="4">
        <Heading content="Posts">Our Posts</Heading>
        <Text>Add New Post:</Text>
    </Flex>
    <Flex gap="4" direction="column" pb="4">
        <Card>
            <div className="text-lime-500 m-4 p-1 bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
            <form action={handleCreatePost} >
                <label  className="sr-only">

                </label>
                <textarea name="content" placeholder="New Post" className="p-3 w-full focus:outline-none"></textarea>
               
                <Button className="p-3 w-full focus:outline-none">Submit</Button>
            </form>
            </div>
            
        </Card>
    </Flex>
    <Flex gap="4" direction="column" pb="4">
        <Card>
            <Heading>All Posts</Heading>
        </Card>
    </Flex>
    <Flex gap="4" direction="column">
       
    {posts.rows.map((post: any) => {
            console.log(posts)
            return (
            <Card key={post.id}>
                <div>
                    <Avatar
                        size="4"
                        src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
                        radius="full"
                        fallback="T"
                    />
                    <h4>{post.username} says:</h4>
                </div>
                <p>{post.content}</p>
            </Card>
            );
        })}
    </Flex>

    <Flex gap="4"  pb="4">
        <Box width="700px">
            <Card size="3">
                <Flex  gap="4" align="center">
                    <Avatar size="6" radius="full" fallback="T" color="indigo"/>
                    <Box>
                        <Text as="div" size="4" weight="bold">
                            Teodros Girmay
                        </Text>
                        <Text as="div" size="4" color="gray">
                            Engineering
                        </Text>
                        <Flex gap="2">
                            <Badge color="orange">Design</Badge>
                            <Badge color="crimson">UI</Badge>
                        </Flex>
                        <Text>
                            Deserunt officia et voluptate est nostrud culpa nisi. 
                            Amet adipisicing incididunt nostrud do id id. Qui laboris officia ullamco cillum 
                            et laborum nisi amet ut sint proident pariatur consequat. Voluptate cillum labore 
                            minim laboris qui cillum ad velit nulla. Deserunt in magna anim commodo proident pariatur.
                            Sint qui sunt id sunt enim aliqua sunt pariatur voluptate sit. Nulla ut ad irure eu irure deserunt fugiat ullamco.
                        </Text>
                        <Flex justify="between" pt="1">
                            <Flex align="center"> 
                                {/* Align icon to our text */}
                                <ChatBubbleIcon />
                                <Text color="gray" ml="2" size="1">3 Comments</Text>
                            </Flex>
                            <CookieIcon />
                        </Flex>
                    </Box>
                </Flex>
            </Card>
        </Box>
    </Flex>
    </Container>


    </Box>
    
  );
}



