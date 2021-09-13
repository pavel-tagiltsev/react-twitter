const PostListItem = () => {
    return (
        <li className="app-list-item d-flex justify-content-between">
            <span className="app-list-item-label">
                Hellow World!
            </span>
            <div className="d-flex justify-content-center align-items-center">
                <button className="btn-star btn-sm">
                    <i class="bi bi-star-fill"></i>
                </button>
                <button className="btn-trash btn-sm">
                    <i class="bi bi-trash-fill"></i>
                </button>
                <i class="bi bi-heart-fill"></i>
            </div>
        </li>
    )
}

export default PostListItem;