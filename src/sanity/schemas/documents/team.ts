import { UserIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export default defineType({
  name: "team",
  title: "Team",
  icon: UserIcon,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "abschluss",
      title: "Abschluss",
      type: "string",
    }),
    defineField({
      name: "jobtitle",
      title: "Jobtitel",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "workarea",
      title: "Tätigkeit",
      type: "text",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "picture",
      title: "Picture",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              if ((context.document?.picture as any)?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            });
          },
        },
      ],
      options: {
        hotspot: true,
        aiAssist: {
          imageDescriptionField: "alt",
        },
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "linkedin",
      title: "Linkedin URL",
      type: "string",
    }),
    defineField({
      name: "xing",
      title: "Xing URL",
      type: "string",
    }),
    defineField({
      name: "email",
      title: "E-Mail",
      type: "string",
    }),
    defineField({
      name: "vcf",
      title: "VCF",
      type: "string",
    }),
  ],
});
