import {
  RichText,
  Style,
  unstable_RichTextV2,
} from "@makeswift/runtime/controls";
import {
  InlinePlugin,
  LinkPlugin,
  TextAlignPlugin,
  TypographyPlugin,
} from "@makeswift/runtime/slate";

import { ReactRuntime } from "@makeswift/runtime/react";
import { BlockPlugin } from "@makeswift/runtime/slate";
import { ForwardedRef, ReactNode, forwardRef } from "react";

// Register your components here!

const RichtextUpgrade = forwardRef(function HelloWorld(
  {
    richtext,
    ...props
  }: {
    richtext?: any;
  },
  ref: ForwardedRef<HTMLDivElement>
) {
  return (
    <div
      ref={ref}
      style={{
        maxWidth: "700px",
        margin: "0 auto",
        width: "100%",
        padding: "20px",
      }}
      {...props}
    >
      {richtext}
    </div>
  );
});

ReactRuntime.registerComponent(RichtextUpgrade, {
  type: "rich-text-v2",
  label: "rich-text-v2",
  props: {
    // richtext: RichText(),
    richtext: unstable_RichTextV2({
      plugins: [
        TypographyPlugin(),
        BlockPlugin(),
        TextAlignPlugin(),
        InlinePlugin(),
        LinkPlugin(),
      ],
    }),
    className: Style({ properties: [Style.Width, Style.Margin] }),
  },
});

ReactRuntime.registerComponent(RichtextUpgrade, {
  type: "rich-text-v1",
  label: "rich-text-v1",
  props: {
    richtext: RichText(),
    className: Style({ properties: [Style.Width, Style.Margin] }),
  },
});
