import React from 'react';
import { Terminal, Zap, Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

export function Home() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono p-6">
      {/* Header with ASCII Art */}
      <header className="mb-12 border-2 border-[#30363d] bg-[#161b22] p-6">
        <pre className="text-[#58a6ff] text-sm md:text-base overflow-x-auto text-center">
{`
██╗  ██╗ █████╗  ██████╗██╗  ██╗ █████╗ ████████╗██╗  ██╗ ██████╗ ███╗   ██╗
██║  ██║██╔══██╗██╔════╝██║ ██╔╝██╔══██╗╚══██╔══╝██║  ██║██╔═══██╗████╗  ██║
███████║███████║██║     █████╔╝ ███████║   ██║   ███████║██║   ██║██╔██╗ ██║
██╔══██║██╔══██║██║     ██╔═██╗ ██╔══██║   ██║   ██╔══██║██║   ██║██║╚██╗██║
██║  ██║██║  ██║╚██████╗██║  ██╗██║  ██║   ██║   ██║  ██║╚██████╔╝██║ ╚████║
╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝
`}
        </pre>
        <div className="mt-4 text-[#8b949e] text-sm">
          <span className="text-[#7ee787]">v2026.02.17</span> - Build the future in 48 hours
        </div>
        <div className="mt-2 text-[#8b949e] text-sm">
          <span className="animate-pulse">▊</span> System ready. All participants connected.
        </div>
      </header>

      <div className="max-w-7xl mx-auto space-y-6">
        {/* Quick Start Guide */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <div className="border-b border-[#30363d] bg-[#161b22] p-4 flex items-center gap-3">
            <Terminal className="w-5 h-5 text-[#7ee787]" />
            <h2 className="text-lg">
              <span className="text-[#8b949e]">~/</span>
              <span className="text-[#58a6ff]">quick-start</span>
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex gap-3">
                <span className="text-[#7ee787]">$</span>
                <div className="flex-1">
                  <p className="text-[#c9d1d9] mb-2">
                    <span className="text-[#f85149]">01.</span> Clone the starter repository
                  </p>
                  <code className="block bg-[#161b22] border border-[#30363d] p-3 text-[#7ee787] text-sm overflow-x-auto">
                    git clone https://github.com/hackathon/starter-kit.git
                  </code>
                </div>
              </div>
              
              <div className="flex gap-3">
                <span className="text-[#7ee787]">$</span>
                <div className="flex-1">
                  <p className="text-[#c9d1d9] mb-2">
                    <span className="text-[#f85149]">02.</span> Install dependencies and set up environment
                  </p>
                  <code className="block bg-[#161b22] border border-[#30363d] p-3 text-[#7ee787] text-sm overflow-x-auto">
                    npm install && npm run setup
                  </code>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-[#7ee787]">$</span>
                <div className="flex-1">
                  <p className="text-[#c9d1d9] mb-2">
                    <span className="text-[#f85149]">03.</span> Join the Discord server for real-time support
                  </p>
                  <code className="block bg-[#161b22] border border-[#30363d] p-3 text-[#58a6ff] text-sm">
                    https://discord.gg/hackathon2026
                  </code>
                </div>
              </div>

              <div className="flex gap-3">
                <span className="text-[#7ee787]">$</span>
                <div className="flex-1">
                  <p className="text-[#c9d1d9] mb-2">
                    <span className="text-[#f85149]">04.</span> Start building and push commits regularly
                  </p>
                  <code className="block bg-[#161b22] border border-[#30363d] p-3 text-[#7ee787] text-sm overflow-x-auto">
                    npm run dev # Happy hacking! 🚀
                  </code>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cases */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <div className="border-b border-[#30363d] bg-[#161b22] p-4 flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-[#d29922]" />
            <h2 className="text-lg">
              <span className="text-[#8b949e]">~/</span>
              <span className="text-[#58a6ff]">challenge-cases</span>
            </h2>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  id: 'CASE_001',
                  title: 'AI-Powered Developer Tools',
                  difficulty: 'HARD',
                  description: 'Build an intelligent code assistant that understands context and provides real-time suggestions.',
                  tech: ['Python', 'TensorFlow', 'React'],
                  points: 500,
                  link: '/case/1'
                },
                {
                  id: 'CASE_002',
                  title: 'Sustainable City Dashboard',
                  difficulty: 'MEDIUM',
                  description: 'Create a real-time dashboard for tracking carbon emissions and sustainability metrics.',
                  tech: ['Node.js', 'D3.js', 'PostgreSQL'],
                  points: 350
                },
                {
                  id: 'CASE_003',
                  title: 'Healthcare Data Analyzer',
                  difficulty: 'HARD',
                  description: 'Develop a HIPAA-compliant system for analyzing patient data trends and predicting outcomes.',
                  tech: ['Go', 'React', 'MongoDB'],
                  points: 500
                },
                {
                  id: 'CASE_004',
                  title: 'Education Platform',
                  difficulty: 'MEDIUM',
                  description: 'Build an interactive learning platform with gamification and progress tracking.',
                  tech: ['Next.js', 'Firebase', 'TailwindCSS'],
                  points: 350
                }
              ].map((caseItem) => (
                <Link
                  key={caseItem.id}
                  to={caseItem.link || '#'}
                  className="block"
                >
                  <div className="border border-[#30363d] bg-[#161b22] p-4 hover:border-[#58a6ff] transition-colors h-full">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#f85149] text-sm">[{caseItem.id}]</span>
                      <span className={`text-xs px-2 py-1 border ${
                        caseItem.difficulty === 'HARD' 
                          ? 'border-[#f85149] text-[#f85149]' 
                          : 'border-[#d29922] text-[#d29922]'
                      }`}>
                        {caseItem.difficulty}
                      </span>
                    </div>
                    <h3 className="text-[#c9d1d9] mb-2">{caseItem.title}</h3>
                    <p className="text-[#8b949e] text-sm mb-3">{caseItem.description}</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {caseItem.tech.map((tech) => (
                        <span key={tech} className="text-xs bg-[#0d1117] border border-[#30363d] px-2 py-1 text-[#7ee787]">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#58a6ff] text-sm">+{caseItem.points} pts</span>
                      <ChevronRight className="w-4 h-4 text-[#8b949e]" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Extra Assignments */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <div className="border-b border-[#30363d] bg-[#161b22] p-4 flex items-center gap-3">
            <Zap className="w-5 h-5 text-[#f85149]" />
            <h2 className="text-lg">
              <span className="text-[#8b949e]">~/</span>
              <span className="text-[#58a6ff]">bonus-missions</span>
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              {[
                {
                  task: 'Deploy your solution to production',
                  reward: '+100 pts',
                  icon: '🚀'
                },
                {
                  task: 'Implement comprehensive test coverage (>80%)',
                  reward: '+75 pts',
                  icon: '✅'
                },
                {
                  task: 'Create detailed API documentation',
                  reward: '+50 pts',
                  icon: '📚'
                },
                {
                  task: 'Add accessibility features (WCAG 2.1 AA)',
                  reward: '+75 pts',
                  icon: '♿'
                },
                {
                  task: 'Implement dark/light mode toggle',
                  reward: '+25 pts',
                  icon: '🌓'
                },
                {
                  task: 'Add real-time collaboration features',
                  reward: '+100 pts',
                  icon: '👥'
                }
              ].map((mission, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between border border-[#30363d] bg-[#161b22] p-3 hover:border-[#7ee787] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{mission.icon}</span>
                    <span className="text-[#c9d1d9] text-sm">{mission.task}</span>
                  </div>
                  <span className="text-[#7ee787] text-sm">{mission.reward}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 p-3 border border-[#d29922] bg-[#161b22]">
              <p className="text-[#d29922] text-sm">
                <span className="mr-2">⚡</span>
                Complete all bonus missions for a special prize and recognition!
              </p>
            </div>
          </div>
        </section>

        {/* Agenda */}
        <section className="border border-[#30363d] bg-[#0d1117]">
          <div className="border-b border-[#30363d] bg-[#161b22] p-4 flex items-center gap-3">
            <Calendar className="w-5 h-5 text-[#a371f7]" />
            <h2 className="text-lg">
              <span className="text-[#8b949e]">~/</span>
              <span className="text-[#58a6ff]">event-schedule</span>
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {/* Day 1 */}
              <div>
                <h3 className="text-[#58a6ff] mb-3 pb-2 border-b border-[#30363d]">
                  DAY 1 - Friday, February 21
                </h3>
                <div className="space-y-2">
                  {[
                    { time: '18:00', event: 'Registration & Welcome Coffee', status: 'opening' },
                    { time: '19:00', event: 'Opening Ceremony & Keynote Speech', status: 'important' },
                    { time: '20:00', event: 'Team Formation & Networking', status: 'normal' },
                    { time: '21:00', event: 'Hacking Begins! 🎯', status: 'start' },
                    { time: '23:00', event: 'Midnight Pizza & Energy Drinks', status: 'normal' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-sm">
                      <span className="text-[#7ee787] w-16">{item.time}</span>
                      <span className="text-[#8b949e]">|</span>
                      <span className={`flex-1 ${
                        item.status === 'important' ? 'text-[#f85149]' :
                        item.status === 'start' ? 'text-[#7ee787]' :
                        item.status === 'opening' ? 'text-[#58a6ff]' :
                        'text-[#c9d1d9]'
                      }`}>
                        {item.event}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day 2 */}
              <div>
                <h3 className="text-[#58a6ff] mb-3 pb-2 border-b border-[#30363d]">
                  DAY 2 - Saturday, February 22
                </h3>
                <div className="space-y-2">
                  {[
                    { time: '08:00', event: 'Breakfast Available', status: 'normal' },
                    { time: '10:00', event: 'Workshop: Advanced AI Techniques', status: 'workshop' },
                    { time: '12:00', event: 'Lunch Break', status: 'normal' },
                    { time: '14:00', event: 'Mentor Office Hours', status: 'workshop' },
                    { time: '16:00', event: 'Checkpoint: Progress Updates', status: 'important' },
                    { time: '18:00', event: 'Dinner & Team Photos', status: 'normal' },
                    { time: '20:00', event: 'Final Sprint Begins', status: 'start' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-sm">
                      <span className="text-[#7ee787] w-16">{item.time}</span>
                      <span className="text-[#8b949e]">|</span>
                      <span className={`flex-1 ${
                        item.status === 'important' ? 'text-[#f85149]' :
                        item.status === 'start' ? 'text-[#7ee787]' :
                        item.status === 'workshop' ? 'text-[#a371f7]' :
                        'text-[#c9d1d9]'
                      }`}>
                        {item.event}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Day 3 */}
              <div>
                <h3 className="text-[#58a6ff] mb-3 pb-2 border-b border-[#30363d]">
                  DAY 3 - Sunday, February 23
                </h3>
                <div className="space-y-2">
                  {[
                    { time: '09:00', event: 'Submissions Due! ⏰', status: 'deadline' },
                    { time: '10:00', event: 'Judging Period', status: 'important' },
                    { time: '12:00', event: 'Lunch & Demos Setup', status: 'normal' },
                    { time: '13:00', event: 'Project Presentations', status: 'important' },
                    { time: '15:00', event: 'Awards Ceremony & Closing', status: 'closing' },
                    { time: '16:00', event: 'Networking & Farewells', status: 'normal' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 text-sm">
                      <span className="text-[#7ee787] w-16">{item.time}</span>
                      <span className="text-[#8b949e]">|</span>
                      <span className={`flex-1 ${
                        item.status === 'deadline' ? 'text-[#f85149] font-bold' :
                        item.status === 'important' ? 'text-[#f85149]' :
                        item.status === 'closing' ? 'text-[#58a6ff]' :
                        'text-[#c9d1d9]'
                      }`}>
                        {item.event}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-12 border-t-2 border-[#30363d] pt-6 text-center">
          <pre className="text-[#8b949e] text-xs">
{`
┌─────────────────────────────────────────────────────────────┐
│  Need help? Type /help in Discord or find a mentor         │
│  Remember: Innovation happens at the intersection of       │
│  creativity and technology. Good luck, hackers! 🚀          │
└─────────────────────────────────────────────────────────────┘
`}
          </pre>
          <p className="text-[#8b949e] text-sm mt-4">
            <span className="text-[#7ee787]">▊</span> System Status: All systems operational
          </p>
        </footer>
      </div>
    </div>
  );
}
