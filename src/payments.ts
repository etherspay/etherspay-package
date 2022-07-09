export const createPayment = async ({
  success_url,
  cancel_url,
}: {
  success_url: string;
  cancel_url: string;
}) => {
  const res = await fetch(`${success_url}/payments`, {});
};
