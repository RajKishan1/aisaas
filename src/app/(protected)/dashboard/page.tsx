import React from "react";

const page = async () => {
  const { entitlement, profileName } = await SubscriptionEntityQuery();
  return <div>page</div>;
};

export default page;
