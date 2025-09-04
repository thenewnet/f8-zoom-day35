import styles from './Button.module.scss';
import Button from '../../components/Button';

function Buttons() {
    return (
        <>
            <h1 className={styles.page_title}>Buttons Demo</h1>
            <div className={styles.wrapper}>
                <div>
                    Basic Button: <Button>Click me</Button>
                </div>

                <div>
                    Primary Button: <Button primary>Primary Button</Button>
                </div>

                <div>
                    Link Button: <Button href="https://google.com" target="_blank">
                        Go to Google
                    </Button>
                </div>
                <div>
                    Button với Size:
                    <Button size="small">Small</Button>
                    <Button size="medium">Medium</Button>
                    <Button size="large">Large</Button>
                </div>
                <div>
                    Button với Variants:
                    <Button bordered>Bordered</Button>
                    <Button rounded>Rounded</Button>
                    <Button primary rounded>Primary Rounded</Button>
                </div>
                <div>
                    Button với onClick:
                    <Button onClick={() => alert('Clicked!')}>
                        Click Alert
                    </Button>
                </div>
                <div>
                    Disabled Button:
                    <Button disabled onClick={() => alert('Should not show')}>
                        Disabled Button
                    </Button>
                </div>
                <div>
                    Loading Button:
                    <Button loading onClick={() => console.log('Should not log')}>
                        Loading Button
                    </Button>
                    <Button loading bordered onClick={() => console.log('Should not log')}>
                        Loading Button
                    </Button>
                </div>
                <div>
                    Custom className:
                    <Button className={styles.my_custom_class} primary>
                        Custom Styled
                    </Button>
                </div>
                <div>
                    Button với Icon:
                    <Button primary>
                        <span>📧</span> Send Email
                    </Button>
                </div>
            </div>


        </>
    )
}

export default Buttons;