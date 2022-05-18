import { memo } from 'react';
import Link from 'next/link';

import Box from '../../Common/Box';

const Profile = memo(() => (
  <Box>
    <div className='box-title box-vertical-padding box-horizontal-padding no-select'>
      <div className='flex flex-center flex-space-between'>
        <p>Profile</p>

        <button type='button'>
          <i className='material-icons'>edit</i>
          Edit
        </button>
      </div>
    </div>
    <div className='widget-profile box-content box-content-height-nobutton'>
      <div className='center'>
        <form className='upload no-select' noValidate>
          <input type='file' name='file' id='file' accept='.jpg, .jpeg' />
          <label htmlFor='file'>
            <div
              className='icon cover pointer'
              style={{
                backgroundImage: `url('me.png')`,
              }}
            />
            <div className='edit pointer'>
              <i className='material-icons'>edit</i>
            </div>
          </label>
        </form>
      </div>
      <div className='box-horizontal-padding'>
        <div className='center'>
          <h3>IceFrogMate</h3>
          <strong>Level 1</strong>
          <p>You have to upgrade to Level 2 to increase limit</p>
          <Link href='/members/application'>Upgrade to Level 2</Link>
        </div>
      </div>
    </div>
  </Box>
));

export default Profile;
