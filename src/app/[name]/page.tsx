"use client";

import { useEffect, useState } from "react";
import VerbData from "../components/verbs/VerbData";
import { Verb } from "../types/verb";
import VerbSkeleton from "../components/verbs/VerbSkeleton";

export default function VerbDetails({ params }: { params: { name: string } }) {
  const { name } = params;
  const [verb, setVerb] = useState<Verb | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVerb = async () => {
      const response = await fetch(`/api/verbs/${name}`);
      const data = await response.json();

      setVerb(data);
      setLoading(false);
    };

    fetchVerb();
  }, [name]);

  return loading ? <VerbSkeleton /> : <VerbData verb={verb} />;
}
