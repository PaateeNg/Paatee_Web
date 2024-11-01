import { authOptions } from '@/app/api/auth/[...nextauth]/auth'
import CustomerProfile from '@/components/profile/CustomerProfile'
import PlannerProfile from '@/components/profile/PlannerProfile'
import VendorProfile from '@/components/profile/VendorProfile'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

interface ProfileProps {
  params: { profileId: string };
}

const Profile = async ({ params }: ProfileProps) => {
  // const session = await getServerSession(authOptions);
  
  // if (!session) {
  //   redirect('/sign-in');
  // }

  // const user = session.user;
  // console.log("user",user)
  const { profileId } = params;

  if (profileId === 'customer') {
    return <CustomerProfile />;
  } else if (profileId === 'vendor') {
    return <VendorProfile />;
  } else if (profileId === 'planner') {
    return <PlannerProfile />;
  }

  return <p>Profile not found</p>;
};

export default Profile;
