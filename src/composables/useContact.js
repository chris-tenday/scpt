import axios from "axios";
import {ref} from "vue";

export function useContact()
{
    const name=ref('');
    const email=ref('');
    const telephone=ref('');
    const message=ref('');

    const isLoading=ref(false);


    const sendContact=async (to)=>{
        isLoading.value=true;
        var data={
            name:name.value,
            email:email.value,
            telephone:telephone.value,
            message:message.value,
            to:to,
            action:"contact_form_7_submit"
        };
        var res=await axios.post("https://scpt.cd/corpo/wp-admin/admin-ajax.php",data);

        isLoading.value=false;
        window.location.reload();
    };

    return{
        name,
        email,
        telephone,
        message,
        sendContact,
        isLoading
    }
}