import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { defaultProjects } from "@/components/PortfolioGallery";

const CaseStudy = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const caseStudy = defaultProjects.find((p) => p.id === id);

  if (!caseStudy) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-4">Case Study Not Found</h1>
        <Button onClick={() => navigate(-1)}>Go Back</Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-16 px-4 md:px-8 max-w-3xl mx-auto">
      <Button variant="ghost" className="mb-6" onClick={() => navigate(-1)}>
        ← Back
      </Button>
      <h1 className="text-4xl font-bold mb-4">{caseStudy.title}</h1>
      <img src={caseStudy.image} alt={caseStudy.title} className="w-full rounded mb-6" />
      <div className="flex flex-wrap gap-2 mb-4">
        {caseStudy.tags.map((tag, i) => (
          <Badge key={i} variant="secondary">{tag}</Badge>
        ))}
      </div>
      <p className="text-lg mb-6">{caseStudy.description}</p>
      {caseStudy.testimonial && (
        <div className="bg-muted/30 rounded p-4 mb-6">
          <p className="italic">"{caseStudy.testimonial.content}"</p>
          <p className="text-sm font-semibold mt-2">- {caseStudy.testimonial.name}, {caseStudy.testimonial.role}</p>
        </div>
      )}
      {/* Add more technical/metrics/results details here as needed */}
    </div>
  );
};

export default CaseStudy; 