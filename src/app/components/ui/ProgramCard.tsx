"use client";
import { Card, CardBody, Chip } from "@heroui/react";
import { motion } from "motion/react";

// Program Card Component
const ProgramCard = ({
  program,
  index,
}: {
  program: {
    color: string;
    title: string;
    age: string;
    description: string;
    features: string[];
  };
  index: number;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
    >
      <Card className={`${program.color} border-2 h-full`}>
        <CardBody className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-2xl font-bold text-gray-800">
              {program.title}
            </h3>
            <Chip size="sm" variant="flat" color="primary">
              {program.age}
            </Chip>
          </div>
          <p className="text-gray-700 mb-6 text-lg">{program.description}</p>
          <div className="space-y-2">
            {program.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-center">
                <span className="text-green-500 mr-2">✓</span>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </motion.div>
  );
};

export default ProgramCard;
