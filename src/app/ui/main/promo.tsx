import { FormattedText } from "../common/formattedText";

export default function Promo() {
  return (
    <section className="container pb-[130px] pt-[110px] lg:pt-[190px] xl:pb-[230px]">
      <h2 className="font-unbounded text-[32px] font-semibold leading-normal sm:text-[56px] md:text-[64px] lg:text-fz74">
        <FormattedText>Откройте новое в кино</FormattedText>
      </h2>
      <p className="mt-[30px] max-w-[1228px] text-[18px] font-regular leading-normal sm:text-[24px] xl:text-fz32">
        <FormattedText>
          Индивидуальные рекомендации от Кинонавигатора. Найдите идеальный фильм
          на основе ваших отзывов и предпочтений
        </FormattedText>
      </p>
    </section>
  );
}
