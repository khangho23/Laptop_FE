import UserLayout from "src/components/Layout/UserLayout";
import Search from "./Search";
const SearchPage = () => {
    return (
        <UserLayout>
            <div className="card mb-3">
                <div className="card-body">
                    <Search />
                </div>
            </div>
        </UserLayout>
    );
}
export default SearchPage;