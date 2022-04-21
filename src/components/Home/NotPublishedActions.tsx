import RouterButton from '../RouterButton';

export default function NotPublishedActions() {
  return (
    <RouterButton
      linkProps={{
        to: '/setup',
      }}
      marginTop="large"
    >
      Add widget to your store
    </RouterButton>
  );
}
