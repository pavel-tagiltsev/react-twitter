import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostListItem from "../post-list-item";

const App = () => {
    return (
        <div className="app">
           <AppHeader/>
           <div className="search-panel d-flex">
                <SearchPanel/>
                <PostStatusFilter/>
           </div>
            <PostListItem/>
        </div> 
    )
}

export default App;