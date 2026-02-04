import Breadcrumb from '@/components/common/Breadcrumb';
import PageTitle from '@/components/common/PageTitle';
import { METADATA } from '@/constants/config';

export const metadata = {
  title: METADATA.PRIVACY,
};

export default function Page() {
  return (
    <main className='l-container'>
      <Breadcrumb paths={[{ label: 'Privacy Policy' }]} />
      <PageTitle title='Privacy Policy' subTitle='' />
      <div className='l-container--large l-container--contents'>
        <article className='c-privacy'>
          <h2 className='c-heading--lv2 u-mb-30'>Personal Information Protection Policy</h2>
          <p>This is dummy data.</p>
          <p>
            We deeply recognize that our customers&apos; personal information constitutes important information that comprises privacy, and when handling personal information in our business operations, we shall establish internal regulations regarding laws and regulations related to personal information and the protection of personal information, and organize an organizational structure to strive for appropriate protection of personal information, thereby respecting our customers and meeting their expectations and trust in us.
          </p>
          <h3 className='c-heading--lv3'>Collection, Use, and Provision of Personal Information</h3>
          <p>
            We shall specify the purpose of use of personal information within the scope of our business activities and fairly and appropriately collect, use, and provide personal information to the extent necessary to achieve that purpose. We shall also take measures to prevent the use of collected personal information for purposes other than those specified.
          </p>
          <h3 className='c-heading--lv3'>Collection, Use, and Provision of Personal Information</h3>
          <p>
            We shall specify the purpose of use of personal information within the scope of our business activities and fairly and appropriately collect, use, and provide personal information to the extent necessary to achieve that purpose. We shall also take measures to prevent the use of collected personal information for purposes other than those specified.
          </p>
          <h3 className='c-heading--lv3'>Compliance with Laws and Regulations</h3>
          <p>
            We shall comply with laws and regulations concerning personal information, guidelines established by the government, other norms, and social order, and strive for appropriate protection of personal information.
          </p>
          <h3 className='c-heading--lv3'>Appropriate Management of Personal Information</h3>
          <p>
            We fully recognize the risks of unauthorized access, loss, destruction, falsification, leakage, etc. regarding personal information we handle, and shall implement reasonable security measures and take appropriate corrective measures when problems occur.
          </p>
          <h3 className='c-heading--lv3'>Response to Inquiries</h3>
          <p>
            We shall respond appropriately to inquiries from individuals regarding disclosure, correction, suspension of use, and complaints related to personal information we handle.
          </p>
          <h3 className='c-heading--lv3'>Continuous Improvement</h3>
          <p>
            We shall establish management regulations and a management system for the protection of personal information, ensure thorough implementation by all employees, and conduct regular reviews to strive for continuous improvement.
          </p>
          <p className='u-text-align-right'>
            Established: July 1, 2020&nbsp;&nbsp;
            <br />
            Revised: July 1, 2023
          </p>
        </article>
      </div>
    </main>
  );
}
