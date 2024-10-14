import footerStyles from './footer.module.css'
const Footer : React.FC = () => {
    return <footer className={footerStyles.footer}>
        <ul>
            <h2>Contact</h2>
            <h4 className ={footerStyles.email} > Email:</h4>
         <li className= {footerStyles.email}> ibaduddinsiddiqui418@gmail.com</li><br />
         <li className={footerStyles.email}><h4 className= {footerStyles.email} >Phone:</h4>0335394863</li>
        </ul>
        <p>© 2024 Your Company. All rights reserved.</p>
    </footer>
}
export default Footer; 