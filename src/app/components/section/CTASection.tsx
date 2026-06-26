import ConsultActions from "@/app/components/ui/ConsultActions";
import { siteConfig } from "@/config/site";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-brand px-5 py-24 sm:bg-[linear-gradient(135deg,var(--brand-deep)_0%,var(--brand)_58%,#f973b4_100%)]"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <div>
          <h2 className="mb-6 break-keep text-[1.75rem] font-extrabold leading-tight text-white sm:text-4xl">
            매일 달라지는 아이의 영어실력을 확인해보세요!
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg font-bold text-white sm:text-xl">
            {siteConfig.phone}
          </p>
          <ConsultActions className="[&_.brand-focus-ring:focus-visible]:outline-[rgba(255,255,255,0.78)]" />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
