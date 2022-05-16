import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import userAuthSelector from '../../ducks/selectors.js';
import SignOut from '../TopHeader/HeaderNav/SignOut/SignOut.js';
import './TopHeader.css';

import HeaderTextMenu from './HeaderNav/HeaderTextMenu/HeaderTextMenu';
import HeaderIcon from './HeaderNav/HeaderIcon/HeaderIcon';

function TopHeader() {

    const userAuthData = useSelector(userAuthSelector);
    const [dropDown, setDropDown] = useState(false);
    const handleClick = () => {
      setDropDown(!dropDown);
      console.log(dropDown)
    };

    return (
        <div className="header">
            <a href="#">
                <svg className="logo" id="logo" viewBox="0 0 205 40">
                    <g>
                    <path d="M0.840915 11.0236C0.634374 10.6937 0.442587 10.2437 0.265552 9.67379C0.0885173 9.10386 0 8.50394 0 7.87402C0 6.70416 0.250799 5.86427 0.752398 5.35433C1.2835 4.84439 1.96213 4.58943 2.7883 4.58943H22.0851C22.2916 4.91938 22.4834 5.36933 22.6604 5.93926C22.8375 6.50919 22.926 7.10911 22.926 7.73903C22.926 8.90889 22.6604 9.74878 22.1293 10.2587C21.6277 10.7687 20.9639 11.0236 20.1377 11.0236H15.225V31.811C14.9004 31.901 14.3841 31.991 13.6759 32.081C12.9973 32.171 12.3187 32.216 11.64 32.216C10.9614 32.216 10.3565 32.156 9.82543 32.036C9.32383 31.946 8.896 31.766 8.54193 31.4961C8.18786 31.2261 7.9223 30.8511 7.74527 30.3712C7.56823 29.8913 7.47972 29.2613 7.47972 28.4814V11.0236H0.840915Z"/>
                    <path d="M31.8497 31.946C31.5546 32.036 31.0825 32.126 30.4334 32.216C29.8138 32.306 29.1646 32.351 28.486 32.351C27.8369 32.351 27.2467 32.306 26.7156 32.216C26.214 32.126 25.7862 31.946 25.4321 31.676C25.0781 31.4061 24.7978 31.0461 24.5912 30.5962C24.4142 30.1162 24.3257 29.5013 24.3257 28.7514V15.2531C24.3257 14.5632 24.4437 13.9783 24.6797 13.4983C24.9453 12.9884 25.3141 12.5384 25.7862 12.1485C26.2583 11.7585 26.8337 11.4136 27.5123 11.1136C28.2204 10.7837 28.9728 10.4987 29.7695 10.2587C30.5662 10.0187 31.3923 9.83877 32.248 9.71878C33.1036 9.5688 33.9593 9.49381 34.815 9.49381C36.2313 9.49381 37.3525 9.77878 38.1786 10.3487C39.0048 10.8886 39.4179 11.7885 39.4179 13.0484C39.4179 13.4683 39.3589 13.8883 39.2409 14.3082C39.1228 14.6982 38.9753 15.0581 38.7983 15.3881C38.1786 15.3881 37.5443 15.4181 36.8951 15.4781C36.246 15.5381 35.6116 15.628 34.992 15.748C34.3724 15.868 33.7823 16.003 33.2217 16.153C32.6906 16.273 32.2332 16.4229 31.8497 16.6029V31.946Z"/>
                    <path d="M42.3448 4.04949C42.3448 2.90964 42.7137 1.94976 43.4513 1.16985C44.2185 0.389951 45.2216 0 46.4609 0C47.7001 0 48.6886 0.389951 49.4262 1.16985C50.1934 1.94976 50.577 2.90964 50.577 4.04949C50.577 5.18935 50.1934 6.14923 49.4262 6.92913C48.6886 7.70904 47.7001 8.09899 46.4609 8.09899C45.2216 8.09899 44.2185 7.70904 43.4513 6.92913C42.7137 6.14923 42.3448 5.18935 42.3448 4.04949ZM50.2229 31.946C49.8983 32.006 49.4115 32.081 48.7623 32.171C48.1427 32.291 47.5084 32.351 46.8592 32.351C46.2101 32.351 45.62 32.306 45.0889 32.216C44.5873 32.126 44.1594 31.946 43.8054 31.676C43.4513 31.4061 43.171 31.0461 42.9645 30.5962C42.7874 30.1162 42.6989 29.5013 42.6989 28.7514V10.4387C43.0235 10.3787 43.4956 10.3037 44.1152 10.2137C44.7643 10.0937 45.4134 10.0337 46.0626 10.0337C46.7117 10.0337 47.2871 10.0787 47.7887 10.1687C48.3198 10.2587 48.7623 10.4387 49.1164 10.7087C49.4705 10.9786 49.736 11.3536 49.9131 11.8335C50.1196 12.2835 50.2229 12.8834 50.2229 13.6333V31.946Z"/>
                    <path d="M64.8825 9.44882C66.6529 9.44882 68.2905 9.68879 69.7952 10.1687C71.3296 10.6187 72.6426 11.3236 73.7343 12.2835C74.826 13.2433 75.6816 14.4582 76.3013 15.928C76.9209 17.3678 77.2307 19.0926 77.2307 21.1024C77.2307 23.0221 76.9652 24.7019 76.4341 26.1417C75.9029 27.5816 75.1506 28.7964 74.1769 29.7863C73.2032 30.7462 72.0229 31.4661 70.6362 31.946C69.2789 32.4259 67.7593 32.6659 66.0775 32.6659C64.8088 32.6659 63.6285 32.4709 62.5368 32.081V39.5501C62.2418 39.64 61.7697 39.73 61.1205 39.82C60.4714 39.94 59.8075 40 59.1289 40C58.4798 40 57.8897 39.955 57.3586 39.865C56.857 39.775 56.4291 39.5951 56.0751 39.3251C55.721 39.0551 55.4554 38.6802 55.2784 38.2002C55.1014 37.7503 55.0128 37.1504 55.0128 36.4004V14.8031C55.0128 13.9933 55.1751 13.3333 55.4997 12.8234C55.8538 12.3135 56.3259 11.8485 56.916 11.4286C57.8307 10.8286 58.9666 10.3487 60.3239 9.98875C61.6812 9.6288 63.2007 9.44882 64.8825 9.44882ZM64.9711 26.6367C68.0101 26.6367 69.5297 24.7919 69.5297 21.1024C69.5297 19.1826 69.1461 17.7578 68.379 16.8279C67.6413 15.898 66.5644 15.4331 65.1481 15.4331C64.5875 15.4331 64.0859 15.5081 63.6433 15.658C63.2007 15.778 62.8171 15.928 62.4926 16.108V26.0067C62.8466 26.1867 63.2302 26.3367 63.6433 26.4567C64.0564 26.5767 64.499 26.6367 64.9711 26.6367Z"/>
                    <path d="M105.466 31.811C105.141 31.901 104.625 31.991 103.917 32.081C103.238 32.171 102.56 32.216 101.881 32.216C101.202 32.216 100.598 32.156 100.066 32.036C99.5649 31.946 99.137 31.766 98.783 31.4961C98.4289 31.2261 98.1633 30.8511 97.9863 30.3712C97.8093 29.8913 97.7207 29.2613 97.7207 28.4814V21.4623H89.2231V31.811C88.8985 31.901 88.3822 31.991 87.674 32.081C86.9954 32.171 86.3168 32.216 85.6381 32.216C84.9595 32.216 84.3546 32.156 83.8235 32.036C83.3219 31.946 82.8941 31.766 82.54 31.4961C82.1859 31.2261 81.9204 30.8511 81.7434 30.3712C81.5663 29.8913 81.4778 29.2613 81.4778 28.4814V4.72441C81.8024 4.66442 82.3187 4.58943 83.0269 4.49944C83.735 4.37945 84.4136 4.31946 85.0628 4.31946C85.7414 4.31946 86.3315 4.37945 86.8331 4.49944C87.3642 4.58943 87.8068 4.7694 88.1609 5.03937C88.5149 5.30934 88.7805 5.68429 88.9575 6.16423C89.1346 6.64417 89.2231 7.27409 89.2231 8.05399V15.2531H97.7207V4.72441C98.0453 4.66442 98.5617 4.58943 99.2698 4.49944C99.9779 4.37945 100.657 4.31946 101.306 4.31946C101.984 4.31946 102.574 4.37945 103.076 4.49944C103.607 4.58943 104.05 4.7694 104.404 5.03937C104.758 5.30934 105.023 5.68429 105.2 6.16423C105.377 6.64417 105.466 7.27409 105.466 8.05399V31.811Z"/>
                    <path d="M132.901 21.0574C132.901 22.9171 132.621 24.5819 132.06 26.0517C131.499 27.4916 130.703 28.7064 129.67 29.6963C128.667 30.6862 127.457 31.4361 126.041 31.946C124.624 32.4559 123.046 32.7109 121.305 32.7109C119.564 32.7109 117.986 32.4409 116.569 31.901C115.153 31.3611 113.929 30.5962 112.896 29.6063C111.893 28.5864 111.111 27.3566 110.55 25.9168C109.99 24.4769 109.709 22.8571 109.709 21.0574C109.709 19.2876 109.99 17.6828 110.55 16.243C111.111 14.8031 111.893 13.5883 112.896 12.5984C113.929 11.5786 115.153 10.7986 116.569 10.2587C117.986 9.71878 119.564 9.44882 121.305 9.44882C123.046 9.44882 124.624 9.73378 126.041 10.3037C127.457 10.8436 128.667 11.6235 129.67 12.6434C130.703 13.6333 131.499 14.8481 132.06 16.288C132.621 17.7278 132.901 19.3176 132.901 21.0574ZM117.41 21.0574C117.41 22.8871 117.75 24.297 118.428 25.2868C119.136 26.2467 120.11 26.7267 121.349 26.7267C122.589 26.7267 123.533 26.2317 124.182 25.2418C124.861 24.252 125.2 22.8571 125.2 21.0574C125.2 19.2576 124.861 17.8778 124.182 16.9179C123.503 15.928 122.544 15.4331 121.305 15.4331C120.066 15.4331 119.107 15.928 118.428 16.9179C117.75 17.8778 117.41 19.2576 117.41 21.0574Z"/>
                    <path d="M136.572 10.4387C136.867 10.3487 137.324 10.2587 137.944 10.1687C138.593 10.0787 139.257 10.0337 139.935 10.0337C140.584 10.0337 141.16 10.0787 141.661 10.1687C142.192 10.2587 142.635 10.4387 142.989 10.7087C143.343 10.9786 143.609 11.3536 143.786 11.8335C143.992 12.2835 144.096 12.8834 144.096 13.6333V23.3071C144.096 24.5369 144.391 25.4218 144.981 25.9618C145.571 26.4717 146.426 26.7267 147.548 26.7267C148.226 26.7267 148.772 26.6667 149.185 26.5467C149.628 26.4267 149.967 26.3067 150.203 26.1867V10.4387C150.498 10.3487 150.956 10.2587 151.575 10.1687C152.224 10.0787 152.888 10.0337 153.567 10.0337C154.216 10.0337 154.791 10.0787 155.293 10.1687C155.824 10.2587 156.267 10.4387 156.621 10.7087C156.975 10.9786 157.24 11.3536 157.417 11.8335C157.624 12.2835 157.727 12.8834 157.727 13.6333V27.3116C157.727 28.8114 157.108 29.9363 155.868 30.6862C154.836 31.3461 153.596 31.841 152.151 32.171C150.734 32.5309 149.185 32.7109 147.503 32.7109C145.91 32.7109 144.435 32.5309 143.078 32.171C141.75 31.811 140.599 31.2561 139.625 30.5062C138.652 29.7563 137.899 28.7964 137.368 27.6265C136.837 26.4267 136.572 24.9869 136.572 23.3071V10.4387Z"/>
                    <path d="M180.478 25.4668C180.478 27.7465 179.637 29.5313 177.955 30.8211C176.273 32.111 173.794 32.7559 170.519 32.7559C169.28 32.7559 168.129 32.6659 167.067 32.4859C166.005 32.306 165.09 32.036 164.323 31.676C163.586 31.2861 162.995 30.8061 162.553 30.2362C162.14 29.6663 161.933 28.9914 161.933 28.2115C161.933 27.4916 162.081 26.8916 162.376 26.4117C162.671 25.9018 163.025 25.4818 163.438 25.1519C164.294 25.6318 165.267 26.0667 166.359 26.4567C167.48 26.8166 168.764 26.9966 170.21 26.9966C171.124 26.9966 171.818 26.8616 172.29 26.5917C172.791 26.3217 173.042 25.9618 173.042 25.5118C173.042 25.0919 172.865 24.7619 172.511 24.5219C172.157 24.282 171.567 24.087 170.741 23.937L169.413 23.667C166.846 23.1571 164.928 22.3622 163.659 21.2823C162.42 20.1725 161.8 18.5977 161.8 16.5579C161.8 15.4481 162.036 14.4432 162.509 13.5433C162.981 12.6434 163.645 11.8935 164.5 11.2936C165.356 10.6937 166.374 10.2287 167.554 9.89876C168.764 9.5688 170.092 9.40382 171.537 9.40382C172.629 9.40382 173.647 9.49381 174.591 9.67379C175.565 9.82377 176.406 10.0637 177.114 10.3937C177.822 10.7237 178.383 11.1586 178.796 11.6985C179.209 12.2085 179.415 12.8234 179.415 13.5433C179.415 14.2332 179.283 14.8331 179.017 15.3431C178.781 15.823 178.471 16.228 178.088 16.5579C177.852 16.4079 177.497 16.258 177.025 16.108C176.553 15.928 176.037 15.778 175.476 15.658C174.916 15.5081 174.34 15.3881 173.75 15.2981C173.19 15.2081 172.673 15.1631 172.201 15.1631C171.227 15.1631 170.475 15.2831 169.944 15.5231C169.413 15.733 169.147 16.078 169.147 16.5579C169.147 16.8879 169.295 17.1579 169.59 17.3678C169.885 17.5778 170.446 17.7728 171.272 17.9528L172.644 18.2677C175.476 18.9276 177.483 19.8425 178.663 21.0124C179.873 22.1522 180.478 23.637 180.478 25.4668Z"/>
                    <path d="M195.706 32.7109C193.965 32.7109 192.342 32.4709 190.837 31.991C189.362 31.4811 188.064 30.7312 186.942 29.7413C185.851 28.7514 184.98 27.5066 184.331 26.0067C183.712 24.5069 183.402 22.7522 183.402 20.7424C183.402 18.7627 183.712 17.0679 184.331 15.658C184.98 14.2182 185.821 13.0484 186.854 12.1485C187.887 11.2186 189.067 10.5437 190.395 10.1237C191.722 9.67379 193.08 9.44882 194.466 9.44882C196.03 9.44882 197.447 9.68879 198.715 10.1687C200.014 10.6487 201.12 11.3086 202.035 12.1485C202.979 12.9884 203.702 13.9933 204.203 15.1631C204.734 16.333 205 17.6078 205 18.9876C205 20.0075 204.72 20.7874 204.159 21.3273C203.598 21.8673 202.817 22.2122 201.813 22.3622L190.881 24.027C191.206 25.0169 191.87 25.7668 192.873 26.2767C193.876 26.7567 195.027 26.9966 196.325 26.9966C197.535 26.9966 198.671 26.8466 199.733 26.5467C200.825 26.2167 201.71 25.8418 202.389 25.4218C202.861 25.7218 203.259 26.1417 203.584 26.6817C203.908 27.2216 204.071 27.7915 204.071 28.3915C204.071 29.7413 203.451 30.7462 202.212 31.4061C201.268 31.916 200.205 32.261 199.025 32.4409C197.845 32.6209 196.738 32.7109 195.706 32.7109ZM194.466 15.0281C193.758 15.0281 193.139 15.1481 192.608 15.3881C192.106 15.628 191.693 15.943 191.368 16.333C191.044 16.6929 190.793 17.1129 190.616 17.5928C190.468 18.0427 190.38 18.5077 190.35 18.9876L197.919 17.7278C197.83 17.1279 197.506 16.5279 196.945 15.928C196.384 15.3281 195.558 15.0281 194.466 15.0281Z"/>
                    </g>
                </svg>
            </a>
            <nav className="header_nav">
                <div className="nav_text">
                    <HeaderTextMenu context="Stays"/>
                    <HeaderTextMenu context="Attractions"/>
                </div>
                <div className="nav_icons">
                    <HeaderIcon className={"night"} viewBox={"0 0 30 30"} path={"M25.6101 10.6101V4.38992H19.3899L15 0L10.6101 4.38992H4.38992V10.6101L0 15L4.38992 19.3899V25.6101H10.6101L15 30L19.3899 25.6101H25.6101V19.3899L30 15L25.6101 10.6101ZM15 22.9576C13.8196 22.9576 12.6923 22.6923 11.6844 22.2281C14.4164 20.9682 16.3263 18.2096 16.3263 15C16.3263 11.7905 14.4164 9.03183 11.6844 7.77188C12.6923 7.30769 13.8196 7.04244 15 7.04244C19.3899 7.04244 22.9576 10.6101 22.9576 15C22.9576 19.3899 19.3899 22.9576 15 22.9576Z"}/>
                    <HeaderIcon handleClick={handleClick} className={userAuthData === null || dropDown ? 'account _active_icon' : 'account'} viewBox={"0 0 40 40"} path={"M20 0C8.96 0 0 8.96 0 20C0 31.04 8.96 40 20 40C31.04 40 40 31.04 40 20C40 8.96 31.04 0 20 0ZM20 6C23.32 6 26 8.68 26 12C26 15.32 23.32 18 20 18C16.68 18 14 15.32 14 12C14 8.68 16.68 6 20 6ZM20 34.4C15 34.4 10.58 31.84 8 27.96C8.06 23.98 16 21.8 20 21.8C23.98 21.8 31.94 23.98 32 27.96C29.42 31.84 25 34.4 20 34.4Z"}/>
                    {dropDown && (<SignOut/>)}   
                </div>
            </nav>
        </div>
    )
}

export default TopHeader;