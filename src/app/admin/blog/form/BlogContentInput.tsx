"use client";

import { useState } from "react";
import RichTextEditor from "@/components/_shared/RichTextEditor/RichTextEditor";

export default function BlogContentInput({ defaultValue }: { defaultValue: string }) {
  const [content, setContent] = useState(defaultValue);

  return (
    <>
      <input type="hidden" name="content" value={content} />
      <RichTextEditor content={content} onChange={setContent} />
    </>
  );
}
