'use client';

import Breadcrumb from '@/components/common/Breadcrumb';
import Menu from '@/components/common/Menu';
import PageTitle from '@/components/common/PageTitle';
import postMemberDelete from '@/fetch/postMemberDelete';
import getMemberMe from '@/fetch/getMemberMe';
import { useUser } from '@/contexts/user';
import AlertSuccess from '@/components/ui/AlertSuccess';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Metadata from '@/components/common/Metadata';
import { METADATA } from '@/constants/config';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [memberInfo, setMemberInfo] = useState([]);
  const { storeUser } = useUser();
  const [alert, setAlert] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const memberInfoFunction = async () => {
      try {
        const info = await getMemberMe();
        if (info.errors.length) {
          router.push('/login');
        } else {
          setMemberInfo(info.details);
        }
      } catch (error) {
        console.error('Error fetching member information', error);
      }
    };

    memberInfoFunction();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userStatus = await postMemberDelete();

    if (userStatus) {
      storeUser(null);
      setAlert(true);
    }
  };

  return (
    <main className='l-container'>
      <Metadata title={METADATA.MEMBER_DELETE} />
      <Breadcrumb paths={[{ label: 'Delete Account' }]} />
      <main>
        <PageTitle title='Delete Account' subTitle='Unsubscribe' />
        <div className='l-container--col-2 l-container--contents'>
          <main className='l-container--col-2__main'>
            <form className='c-form' onSubmit={handleSubmit}>
              <div className='c-form-group'>
                <dl>
                  <dt className='c-form-label'>Name</dt>
                  {memberInfo && (
                    <dd>
                      {memberInfo.name1} {memberInfo.name2}
                    </dd>
                  )}
                </dl>
              </div>
              <div className='c-form-group'>
                <dl>
                  <dt className='c-form-label'>Email Address</dt>
                  {memberInfo && <dd>{memberInfo.email}</dd>}
                </dl>
              </div>
              {alert ? (
                <div>
                  <AlertSuccess message='Account deletion completed' />
                  <div className='c-form-group u-text-align-center'>
                    <Link href='/' className=''>
                      Back to Home
                    </Link>
                  </div>
                </div>
              ) : (
                <div>
                  <div className='c-form-group u-text-align-center'>
                    <p>
                      Are you sure you want to delete your account?<br></br>
                      Once the deletion process is complete, you will be automatically logged out.
                    </p>
                  </div>
                  <div className='c-form-group u-text-align-center'>
                    <button
                      type='submit'
                      className='c-button--primary u-width-50'
                    >
                      Delete Account
                    </button>
                  </div>
                  <div className='c-form-group u-text-align-center'>
                    <Link href='/member/mypage' className=''>
                      Back to My Page
                    </Link>
                  </div>
                </div>
              )}
            </form>
          </main>
          {!alert && (
            <div className='l-container--col-2__side'>
              <Menu />
            </div>
          )}
        </div>
      </main>
    </main>
  );
}
