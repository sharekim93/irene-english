"use client";
import { Card, CardBody, Chip } from "@heroui/react";
import { motion } from "motion/react";

// Program Card Component
const ProgramCard = ({
  program,
}: {
  program: {
    color: string;
    title: string;
    age: string;
    description: string;
    features: string[];
    href: string;
  };
}) => {
  return (
    <motion.div whileHover={{ y: -6 }}>
      <Card className="relative h-full overflow-hidden border border-[#eadfd3] bg-[#fffefa] shadow-[0_16px_34px_rgba(31,41,55,0.08)]">
        <CardBody className="relative flex min-h-[280px] flex-col bg-[linear-gradient(0deg,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:100%_32px] p-7 pl-9 before:absolute before:inset-y-0 before:left-5 before:w-px before:bg-pink-200/80">
          <div className="mb-5 flex min-h-20 flex-col items-start justify-between gap-3">
            <h3 className="text-2xl font-black text-gray-900">
              {program.title}
            </h3>
            <Chip
              size="sm"
              variant="flat"
              className="border border-pink-200 bg-pink-50 text-pink-700"
            >
              {program.age}
            </Chip>
          </div>
          <p className="mb-7 text-base leading-7 text-gray-600">
            {program.description}
          </p>
          <div className="mt-auto space-y-3">
            {program.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center">
                <span className="mr-3 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-pink-50 text-sm font-black text-pink-600">
                  ✓
                </span>
                <span className="font-bold text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          <a
            href={program.href}
            className="mt-7 inline-flex h-11 items-center justify-center rounded-xl bg-gray-950 px-4 text-sm font-bold text-white transition hover:bg-pink-600"
          >
            상세 보기
          </a>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default ProgramCard;
