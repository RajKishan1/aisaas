import { TabsContent } from "@/components/ui/tabs";
import React from "react";
import { StyleGuideQuery } from "@/convex/query.config";

type Props = {
  searchParams: Promise<{
    project: string;
  }>;
};

const page = async ({ searchParams }: Props) => {
  const projectId = (await searchParams).project;
  const existingStyleGuide = await StyleGuideQuery(projectId);
  return (
    <div>
      <TabsContent value="colours" className="space-y-8"></TabsContent>
    </div>
  );
};

export default page;
