import { revalidatePath } from "next/cache";

export async function Actions (){
    

revalidatePath("/posts")
return { message: '' }

}