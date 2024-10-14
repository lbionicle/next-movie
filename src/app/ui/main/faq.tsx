import { faq } from "@/app/lib/placeholder-data";
import FormattedText from "../formattedText";

export default function FAQ() {
  return (
    <section className="container pb-[120px] pt-[100px] leading-normal">
      <h2 className="font-unbounded text-[24px] font-semibold lg:text-fz32">
        Часто задаваемые вопросы
      </h2>
      <div className="mt-20 space-y-[30px]">
        {faq.map(({ title, text }, index) => (
          <details key={index} className="gray-bottom-line relative pb-[30px]">
            <summary className="relative pr-12 font-unbounded text-fz22 leading-normal lg:text-[32px]">
              {title}
            </summary>
            <div className="mt-5 space-y-5 text-white/80">
              {text
                .split(/\n+/)
                .map((paragraph) => paragraph.trim())
                .filter((paragraph) => paragraph.length > 0)
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-fz18 leading-normal lg:text-[22px]"
                  >
                    <FormattedText>{paragraph}</FormattedText>
                  </p>
                ))}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
