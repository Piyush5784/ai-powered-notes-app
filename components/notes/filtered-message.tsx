import { UIMessage } from "ai";
import React from "react";

const FilteredMessage = ({ messages }: { messages: UIMessage[] }) => {
  return (
    <div>
      {" "}
      {messages.length > 0 &&
        (() => {
          const message = messages[messages.length - 1];
          const textParts = message.parts
            .filter((part) => part.type === "text")
            .map((part) => (part.type === "text" ? part.text : ""))
            .join("");

          // Split by the alternative marker if exists
          const [fieldPartRaw, altPartRaw] = textParts.split(
            "**Integrated Simple Formats (Alternatives)**"
          );

          // Utility to strip leading "*" and whitespace
          const cleanLines = (text: string) =>
            text
              .trim()
              .split("\n")
              .map((line) => line.replace(/^\s*[\*\-]\s*/, "").trim())
              .join("\n");

          const fieldPart = cleanLines(fieldPartRaw || "");
          const altPart = cleanLines(altPartRaw || "");

          return (
            <div className="space-y-4">
              {fieldPart && (
                <div>
                  <h4 className="font-semibold text-primary">
                    Field-Based Summary
                  </h4>
                  <pre className="whitespace-pre-wrap text-muted-foreground">
                    {fieldPart}
                  </pre>
                </div>
              )}

              {altPart && (
                <div>
                  <h4 className="font-semibold text-primary">
                    Integrated Alternatives
                  </h4>
                  <pre className="whitespace-pre-wrap text-muted-foreground">
                    {altPart}
                  </pre>
                </div>
              )}
            </div>
          );
        })()}
    </div>
  );
};

export default FilteredMessage;
