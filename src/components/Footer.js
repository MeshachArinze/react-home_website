import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './Footer.css';
const Footer = ({company, news, developer, network}) => {
  return (
    <div className='Footer_background'>
        <div className='Footer_bottom'>
            <div className='Footer_page'>
                Created by Meshach Arinze with   
                <strong>
                    Reactjs, React-Router, Material Ui, Chakra Ui, Emailjs-cs, Normal Css
                </strong>
                  and a little backEnd.
            </div>
            <div className="Footer_subscribe">
                <span className='Footer_update'>Follow me on 
                    <strong>Github: 
                        <a href="https://github.com/MeshachArinze">MeshachArinze</a>and on Linkedln
                        <a href='https://www.linkedln.com/MeshachEkene'>meshach ekene</a>
                    </strong>
                </span>
                <form className='Footer_Form'>
                    <input type="email" placeholder='enter your email' />
                    <Button />
                </form>
            </div>
        </div>
        <div className='Footer_Table'>
            <table>
                <tbody>
                    <tr className='Footer_column'> 
                        <th>{network}</th>
                        <th>{developer}</th>
                        <th>{company}</th>
                        <th>{news}</th>
                    </tr>
                    <tr className='Network'>
                        <td>Facebook</td>
                        <td>Linkedln</td>
                        <td>Instagram</td>
                        <td>Twitter</td>
                    </tr>
                    <tr className='Developer'>
                        <td>Microsoft</td>
                        <td>Ibm</td>
                        <td>Amazon</td>
                        <td>Google</td>
                    </tr>
                    <tr className='Company'>
                        <td>Toptal</td>
                        <td>Softescu</td>
                        <td>Telesoftas</td>
                        <td>Andela</td>
                    </tr>
                    <tr className='News'>
                        <td>React</td>
                        <td>Angular</td>
                        <td>React hooks</td>
                        <td>Node</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

Footer.defaultProps = {
    network: 'Network',
    developer: 'Developer',
    company: 'Comapany',
    news: 'News' 
}

Footer.propTypes = {
    network: PropTypes.string.isRequired
}



export default Footer;