import { Component } from 'react';
import './post-list-item.css';

export default class PostListItem extends Component {
    render() {
        const {label, onDelete, onToggleTrigger, important, like, id} = this.props;
        
        let classNames = 'app-list-item d-flex justify-content-between';

        if (important) {
            classNames += ' important';
        }

        if (like) {
            classNames += ' like';
        }

        return (
            <div className={classNames}>
                <span 
                className="app-list-item-label"
                onClick={() => onToggleTrigger(id, 'like')}>
                    {label}
                </span>
                <div className="d-flex justify-content-center align-items-center">
                    <button 
                        type="button" 
                        className="btn-star btn-sm"
                        onClick={() => onToggleTrigger(id, 'important')}>
                        <i className="bi bi-star-fill"></i>
                    </button>
                    <button 
                        type="button" 
                        className="btn-trash btn-sm"
                        onClick={onDelete}>
                        <i className="bi bi-trash-fill"></i>
                    </button>
                    <i className="bi bi-heart-fill"></i>
                </div>
            </div>
        )
    }
}