import PostListItem from '../post-list-item';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleTrigger}) => {

    const elements = posts.map((post) => {
        const {id} = post;

        return (
            <li key={id} className="list-group-item">
                <PostListItem 
                    {...post} 
                    onDelete={() => onDelete(id)}
                    onToggleTrigger={onToggleTrigger}/>
            </li>
        )
    });

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default PostList;