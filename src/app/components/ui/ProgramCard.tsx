"use client";

import { Card, CardBody, Chip } from "@heroui/react";
import { motion } from "motion/react";

const ProgramCard = ({
  program,
}: {
  program: {
    title: string;
    age: string;
    description: string;
    features: string[];
    href: string;
  };
}) => {
  return (
    <motion.div whileHover={{ y: -6 }}>
      <Card className="warm-card-surface relative h-full overflow-hidden rounded-2xl">
        <CardBody className="relative flex min-h-[280px] flex-col bg-[linear-gradient(0deg,rgba(14,165,233,0.08)_1px,transparent_1px)] bg-[size:100%_32px] p-7 pl-9 before:absolute before:inset-y-0 before:left-5 before:w-px before:bg-pink-200/80">
          <div className="mb-5 flex min-h-20 flex-col items-start justify-between gap-3">
            <h3 className="break-keep text-2xl font-extrabold leading-tight text-gray-950">
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
          <p className="mb-7 break-keep text-base leading-7 text-gray-600">
            {program.description}
          </p>
          <div className="mt-auto space-y-3">
            {program.features.map((feature) => (
              <div key={feature} className="flex items-center">
                <span className="mr-3 flex h-6 w-6 flex-none items-center justify-center rounded-full bg-pink-50 text-sm font-extrabold text-pink-600">
                  ✓
                </span>
                <span className="break-keep font-bold text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
          <a
            href={program.href}
            className="brand-primary-action brand-focus-ring mt-7 min-h-11 px-4 text-sm"
          >
            상세 보기
          </a>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default ProgramCard;
