// import { SignedOut, SignIn, SignInButton, SignOutButton } from '@clerk/nextjs'
// import { getAuth, buildClerkProps } from '@clerk/nextjs/server'
// import { GetServerSideProps } from 'next'

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const { userId } = getAuth(ctx.req)




//   if (!userId) {
//     // handle user is not signed in.
//     <SignIn>
//         <SignInButton></SignInButton>
//     </SignIn>
//   }

//   <SignedOut>
//     <SignOutButton></SignOutButton>
//   </SignedOut>
//   // Load any data your application needs for the page using the userId

//   return { props: { ...buildClerkProps(ctx.req) } }
// }