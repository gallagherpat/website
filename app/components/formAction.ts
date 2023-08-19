"use server"
export async function formAction(data: FormData) {
        const formData = await data;
        console.log(formData.get('name'));
        console.log(formData.get('event'));
        return {success: true}
}