import { apiClient } from "@/api-client";
import { shortTitleOptions, statusOptions } from "@/common";
import { ProgramList, FilterSection, Loading } from "@/components";
import { Session } from "@/types";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({ sessions }: { sessions: Session[] }) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleFilter = (field: string, value: string) => {
    router.query[field] = value;
    router.push(router);
  };

  useEffect(() => {
    const handleStartLoading = () => {
      setIsLoading(true);
    };

    const handleStopLoading = () => {
      setIsLoading(false);
    };

    // detect router change to show loading indicator
    router.events.on("routeChangeStart", handleStartLoading);
    router.events.on("routeChangeComplete", handleStopLoading);
    router.events.on("routeChangeError", handleStopLoading);

    return () => {
      router.events.off("routeChangeStart", handleStartLoading);
      router.events.off("routeChangeComplete", handleStopLoading);
      router.events.off("routeChangeError", handleStopLoading);
    };
  }, [router.events]);

  return (
    <div className="p-10">
      <FilterSection onChange={handleFilter} />
      {isLoading ? <Loading /> : <ProgramList sessions={sessions} />}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let statusQuery = ctx.query.status as string;
  let shortTitleQuery = ctx.query.short_title as string;

  if (!statusOptions.map((s) => s.value).includes(statusQuery)) {
    statusQuery = "";
  }

  if (!shortTitleOptions.map((s) => s.value).includes(shortTitleQuery)) {
    shortTitleQuery = "";
  }
  const sessions = await apiClient(
    `/api/sessions?status=${statusQuery}&short_title=${shortTitleQuery}`
  );

  return {
    props: {
      sessions,
    },
  };
};
