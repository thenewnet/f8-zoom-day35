import PropTypes from 'prop-types';
import styles from './Button.module.scss';

function Button({ title, children }){
    return <button>{children}</button>
}

Button.PropTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,

}
export default Button;