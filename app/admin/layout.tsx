import AdminNav from "../components/admin/AdminNav";

export const metaData = {
    title: 'E~Shop Admin',
    descripton: 'E~Shop Amdmin Dashboard',
}

const AdminLayout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
            <AdminNav />
            {children}
        </div>
    );
};

export default AdminLayout;