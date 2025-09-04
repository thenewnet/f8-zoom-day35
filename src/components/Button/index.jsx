import PropTypes from 'prop-types';
import clsx from 'clsx';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import styles from './Button.module.scss';


function Button({
    primary = false,
    bordered = false,
    rounded = false,
    size = 'medium',
    href,
    children,
    className,
    disabled,
    loading,
    ...passProps
}) {

    const classNames = clsx(styles.wrapper, styles[size], className,
        {
            [styles.primary]: primary,
            [styles.bordered]: bordered,
            [styles.rounded]: rounded,
            [styles.disabled]: disabled,
            [styles.loading]: loading,
        });

    const Component = href ? 'a' : 'button';

    return <Component {...passProps} href={href} className={classNames}>
        {children} 
        {loading && (
            <span className={styles.loadingIcon}>
                <FontAwesomeIcon icon={faSpinner} spin />
            </span>
        )}
    </Component>
}

Button.PropTypes = {
    primary: PropTypes.bool,
    bordered: PropTypes.bool,
    rounded: PropTypes.bool,
    size: PropTypes.string,
    href: PropTypes.string,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,

}
export default Button;