'use client';

const skills = [
    'React.js', 'Next.js', 'Tailwind CSS', 'JavaScript', 'TypeScript', 'Figma',
    'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Postman', 'Git', 'Vercel',
    'C', 'C++', 'Python', 'SQL', 'HTML5', 'CSS3'
];

export default function SkillsMarquee() {
    const extendedSkills = [...skills, ...skills];

    return (
        <div className="w-full overflow-hidden py-8 bg-black/20 border-y border-white/10">
            <div className="flex animate-marquee">
                {extendedSkills.map((skill, index) => (
                    <div key={index} className="flex-shrink-0 mx-6 text-xl text-amber-600">
                        {skill}
                    </div>
                ))}
            </div>
        </div>
    );
}