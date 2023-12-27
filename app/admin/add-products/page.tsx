import Container from "@/app/components/Container";
import FormWrap from "@/app/components/FormWrap";
import AddProductForm from "./AddProductForm";
import NullData from "@/app/components/NullData";
import getCurrentUser from "@/actions/getCurrentUser";


const AddProducts = async() => {

    const currentUser = await getCurrentUser()

    if(!currentUser || currentUser.role !== 'ADMIN'){
        return <NullData title="Ooops! Access denied"/>
    }
    return (
        <div>
            <Container>
                <FormWrap>
                    <AddProductForm />
                </FormWrap>
            </Container>
        </div>
    );
};

export default AddProducts;