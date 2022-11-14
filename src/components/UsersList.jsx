import React from 'react';

const UsersList = ({ dataUsers, selectUser, deleteUser}) => {
    return (
        <div className='userList'>
            <ul>
                {
                    dataUsers.map(user => (
                        <li key={user.id}>
                            <h1>
                                {user.first_name} {user.last_name}
                            </h1>
                            <p>
                                EMAIL <br />
                                {user.email}
                            </p>
                            <p>
                                BIRTHDAY <br />
                                <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g clipPath="url(#clip0_7_531)">
                                        <path d="M15.8337 9.5V17.4167H3.16699V9.5" stroke="#212121" strokeWidth="1.58" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M1.5835 5.54163H17.4168V9.49996H1.5835V5.54163Z" stroke="#212121" strokeWidth="1.58" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.5 17.4166V5.54163" stroke="#212121" strokeWidth="1.58" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.50016 5.54165H5.93766C5.41276 5.54165 4.90935 5.33313 4.53818 4.96196C4.16701 4.5908 3.9585 4.08739 3.9585 3.56248C3.9585 3.03757 4.16701 2.53416 4.53818 2.163C4.90935 1.79183 5.41276 1.58331 5.93766 1.58331C8.7085 1.58331 9.50016 5.54165 9.50016 5.54165Z" stroke="#212121" strokeWidth="1.58" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M9.5 5.54165H13.0625C13.5874 5.54165 14.0908 5.33313 14.462 4.96196C14.8331 4.5908 15.0417 4.08739 15.0417 3.56248C15.0417 3.03757 14.8331 2.53416 14.462 2.163C14.0908 1.79183 13.5874 1.58331 13.0625 1.58331C10.2917 1.58331 9.5 5.54165 9.5 5.54165Z" stroke="#212121" strokeWidth="1.58" strokeLinecap="round" strokeLinejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_7_531">
                                            <rect width="19" height="19" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                                {user.birthday}
                            </p>
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={() => deleteUser(user.id)}>
                                <rect x="0.5" y="0.5" width="42" height="42" rx="3.5" fill="#D85D5D" stroke="#D93F3F" />
                                <path d="M13 15H31" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M18 15V13C18 12.4696 18.2107 11.9609 18.5858 11.5858C18.9609 11.2107 19.4696 11 20 11H24C24.5304 11 25.0391 11.2107 25.4142 11.5858C25.7893 11.9609 26 12.4696 26 13V15M29 15V29C29 29.5304 28.7893 30.0391 28.4142 30.4142C28.0391 30.7893 27.5304 31 27 31H17C16.4696 31 15.9609 30.7893 15.5858 30.4142C15.2107 30.0391 15 29.5304 15 29V15H29Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M20 20V26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M24 20V26" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg"
                            onClick={() => selectUser(user) }>
                                <rect x="0.5" y="0.5" width="42" height="42" rx="3.5" fill="#F7F7F7" stroke="#BDBDBD" />
                                <g clipPath="url(#clip0_7_538)">
                                    <path d="M26.1665 13.5C26.3854 13.2811 26.6452 13.1075 26.9312 12.989C27.2171 12.8706 27.5236 12.8096 27.8332 12.8096C28.1427 12.8096 28.4492 12.8706 28.7352 12.989C29.0211 13.1075 29.281 13.2811 29.4998 13.5C29.7187 13.7189 29.8923 13.9787 30.0108 14.2647C30.1292 14.5506 30.1902 14.8571 30.1902 15.1667C30.1902 15.4762 30.1292 15.7827 30.0108 16.0686C29.8923 16.3546 29.7187 16.6145 29.4998 16.8333L18.2498 28.0833L13.6665 29.3333L14.9165 24.75L26.1665 13.5Z" stroke="#D3D3D3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_7_538">
                                        <rect width="20" height="20" fill="white" transform="translate(12 11)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

export default UsersList;