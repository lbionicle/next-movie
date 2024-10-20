import { faq } from "@/app/lib/placeholder-data";
import { FormattedParagraph, FormattedText } from "../common/formattedText";

export default function FAQ() {
  return (
    <section className="container pb-[120px] pt-[100px] font-nunito leading-normal">
      <h2 className="font-unbounded text-[24px] font-semibold lg:text-fz32">
        Часто задаваемые вопросы
      </h2>
      <div className="mt-20 space-y-[30px]">
        {faq.map(({ title, text }, index) => (
          <details key={index} className="gray-bottom-line relative pb-[30px]">
            <summary className="relative cursor-pointer pr-12 text-[20px] font-semibold leading-normal md:text-[24px] lg:text-[28px] xl:text-fz32">
              <FormattedText>{title}</FormattedText>
            </summary>
            <div className="mt-5 space-y-5 text-white/80">
              <FormattedParagraph className="text-fz16 leading-normal lg:text-[22px]">
                {text}
              </FormattedParagraph>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
