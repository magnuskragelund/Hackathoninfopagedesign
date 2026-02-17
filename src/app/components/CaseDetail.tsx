import React from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router';

export function CaseDetail() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-mono">
      {/* Header */}
      <header className="border-b border-[#30363d] bg-[#161b22] px-6 py-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="flex items-center gap-2 text-[#58a6ff] hover:text-[#79c0ff] mb-2 text-sm">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to challenges</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-[#f85149] text-sm">[CASE_001]</span>
            <h1 className="text-xl text-[#c9d1d9]">AI-Powered Developer Tools</h1>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 py-8">
        {/* Overview Section */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>overview
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          
          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              Modern software development is increasingly complex, with developers juggling multiple 
              programming languages, frameworks, and tools. While traditional IDEs offer code completion 
              and basic suggestions, they lack deep contextual understanding of the developer's intent 
              and project architecture.
            </p>
            
            <p className="text-[#c9d1d9]">
              Your challenge is to build an AI-powered developer assistant that goes beyond simple 
              autocomplete. The tool should understand code context, detect patterns, suggest 
              architectural improvements, and help developers write better code faster.
            </p>
            
            <div className="border-l-2 border-[#58a6ff] pl-4 py-2 bg-[#161b22] my-6">
              <p className="text-[#8b949e] text-sm mb-1">KEY OBJECTIVE</p>
              <p className="text-[#c9d1d9]">
                Create an intelligent coding assistant that provides real-time, context-aware 
                suggestions to improve developer productivity and code quality.
              </p>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>problem_statement
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          
          <div className="space-y-4 leading-relaxed">
            <p className="text-[#c9d1d9]">
              Developers spend approximately 70% of their time reading and understanding code rather 
              than writing it. Current tools provide limited assistance in:
            </p>
            
            <ul className="space-y-2 ml-6">
              <li className="text-[#c9d1d9]">
                <span className="text-[#7ee787] mr-2">•</span>
                Understanding complex codebases with multiple interconnected modules
              </li>
              <li className="text-[#c9d1d9]">
                <span className="text-[#7ee787] mr-2">•</span>
                Identifying code smells and potential bugs before they reach production
              </li>
              <li className="text-[#c9d1d9]">
                <span className="text-[#7ee787] mr-2">•</span>
                Suggesting optimal design patterns based on project context
              </li>
              <li className="text-[#c9d1d9]">
                <span className="text-[#7ee787] mr-2">•</span>
                Maintaining consistency across team contributions
              </li>
            </ul>
          </div>
        </section>

        {/* Technical Requirements */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>requirements
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-[#d29922] mb-3">Core Features (Required)</h3>
              <div className="space-y-3">
                <div className="border border-[#30363d] bg-[#161b22] p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#7ee787] text-sm mt-1">[01]</span>
                    <div className="flex-1">
                      <h4 className="text-[#c9d1d9] mb-2">Context-Aware Code Completion</h4>
                      <p className="text-[#8b949e] text-sm leading-relaxed">
                        Implement intelligent autocomplete that understands the current function, 
                        file, and project context. Should support at least 3 popular programming 
                        languages (Python, JavaScript, or Java).
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-[#30363d] bg-[#161b22] p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#7ee787] text-sm mt-1">[02]</span>
                    <div className="flex-1">
                      <h4 className="text-[#c9d1d9] mb-2">Real-Time Code Analysis</h4>
                      <p className="text-[#8b949e] text-sm leading-relaxed">
                        Detect common code smells, potential bugs, and security vulnerabilities 
                        as developers type. Provide actionable suggestions with code examples.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-[#30363d] bg-[#161b22] p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#7ee787] text-sm mt-1">[03]</span>
                    <div className="flex-1">
                      <h4 className="text-[#c9d1d9] mb-2">Documentation Generator</h4>
                      <p className="text-[#8b949e] text-sm leading-relaxed">
                        Automatically generate meaningful documentation comments based on code 
                        analysis. Should understand function purpose, parameters, and return values.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border border-[#30363d] bg-[#161b22] p-4">
                  <div className="flex items-start gap-3">
                    <span className="text-[#7ee787] text-sm mt-1">[04]</span>
                    <div className="flex-1">
                      <h4 className="text-[#c9d1d9] mb-2">Interactive Demo Interface</h4>
                      <p className="text-[#8b949e] text-sm leading-relaxed">
                        Build a web-based interface showcasing your AI assistant's capabilities. 
                        Include a code editor with live suggestions and analysis results.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-[#a371f7] mb-3">Bonus Features (Optional)</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-[#8b949e]">+50</span>
                  <span className="text-[#c9d1d9]">Integration with popular IDEs (VS Code, JetBrains)</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-[#8b949e]">+75</span>
                  <span className="text-[#c9d1d9]">Natural language code generation from comments</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-[#8b949e]">+40</span>
                  <span className="text-[#c9d1d9]">Performance optimization suggestions</span>
                </div>
                <div className="flex items-start gap-3 text-sm">
                  <span className="text-[#8b949e]">+60</span>
                  <span className="text-[#c9d1d9]">Collaborative features for team coding standards</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>tech_stack
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          
          <div className="border border-[#30363d] bg-[#161b22] p-6">
            <pre className="text-sm text-[#c9d1d9] overflow-x-auto leading-relaxed">
{`{
  "recommended": {
    "backend": [
      "Python 3.9+",
      "TensorFlow / PyTorch",
      "FastAPI / Flask"
    ],
    "frontend": [
      "React 18+",
      "TypeScript",
      "Monaco Editor / CodeMirror"
    ],
    "ml_models": [
      "GPT-based models",
      "CodeBERT",
      "Custom fine-tuned models"
    ],
    "database": [
      "PostgreSQL",
      "Redis (caching)"
    ]
  },
  "note": "You may use alternative technologies if justified"
}`}
            </pre>
          </div>
        </section>

        {/* Deliverables */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>deliverables
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-start gap-3">
              <span className="text-[#7ee787]">✓</span>
              <div className="flex-1">
                <span className="text-[#c9d1d9]">Working prototype (source code + deployment)</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7ee787]">✓</span>
              <div className="flex-1">
                <span className="text-[#c9d1d9]">Technical documentation (architecture, API design)</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7ee787]">✓</span>
              <div className="flex-1">
                <span className="text-[#c9d1d9]">5-minute demo video showcasing key features</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7ee787]">✓</span>
              <div className="flex-1">
                <span className="text-[#c9d1d9]">README with setup instructions and usage examples</span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#7ee787]">✓</span>
              <div className="flex-1">
                <span className="text-[#c9d1d9]">Presentation slides (max 10 slides)</span>
              </div>
            </div>
          </div>
        </section>

        {/* Judging Criteria */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>judging_criteria
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#c9d1d9]">Innovation & Creativity</span>
              <span className="text-[#8b949e]">25%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#c9d1d9]">Technical Implementation</span>
              <span className="text-[#8b949e]">30%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#c9d1d9]">User Experience</span>
              <span className="text-[#8b949e]">20%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#c9d1d9]">Impact & Usefulness</span>
              <span className="text-[#8b949e]">15%</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-[#c9d1d9]">Presentation</span>
              <span className="text-[#8b949e]">10%</span>
            </div>
          </div>
        </section>

        {/* Resources */}
        <section className="mb-10">
          <div className="mb-4">
            <h2 className="text-[#58a6ff] text-lg mb-2">
              <span className="text-[#8b949e]">~/</span>resources
            </h2>
            <div className="h-px bg-[#30363d]"></div>
          </div>
          
          <div className="space-y-3">
            <div className="border-l-2 border-[#7ee787] pl-4 py-2">
              <h3 className="text-[#7ee787] text-sm mb-2">Datasets</h3>
              <ul className="space-y-1 text-sm">
                <li className="text-[#8b949e]">• CodeSearchNet Dataset (GitHub)</li>
                <li className="text-[#8b949e]">• The Stack (Hugging Face)</li>
                <li className="text-[#8b949e]">• CodeParrot Dataset</li>
              </ul>
            </div>

            <div className="border-l-2 border-[#58a6ff] pl-4 py-2">
              <h3 className="text-[#58a6ff] text-sm mb-2">APIs & Tools</h3>
              <ul className="space-y-1 text-sm">
                <li className="text-[#8b949e]">• OpenAI Codex API (limited free tier)</li>
                <li className="text-[#8b949e]">• Tree-sitter (code parsing)</li>
                <li className="text-[#8b949e]">• Language Server Protocol</li>
              </ul>
            </div>

            <div className="border-l-2 border-[#a371f7] pl-4 py-2">
              <h3 className="text-[#a371f7] text-sm mb-2">Documentation</h3>
              <ul className="space-y-1 text-sm">
                <li className="text-[#8b949e]">• ML Code Completion Guide (docs/ml-completion.pdf)</li>
                <li className="text-[#8b949e]">• IDE Integration Best Practices (docs/ide-integration.md)</li>
                <li className="text-[#8b949e]">• Example implementations in /resources/examples/</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="border-t border-[#30363d] pt-6">
          <div className="border border-[#30363d] bg-[#161b22] p-4">
            <p className="text-[#8b949e] text-sm mb-2">Questions or need clarification?</p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="text-[#58a6ff]">
                <span className="text-[#8b949e]">mentor:</span> alex.chen@hackathon.dev
              </span>
              <span className="text-[#58a6ff]">
                <span className="text-[#8b949e]">discord:</span> #case-001-ai-tools
              </span>
              <span className="text-[#58a6ff]">
                <span className="text-[#8b949e]">office_hours:</span> Sat 14:00-16:00
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#30363d] bg-[#161b22] px-6 py-4 mt-12">
        <div className="max-w-4xl mx-auto text-center text-[#8b949e] text-sm">
          <span className="text-[#7ee787]">▊</span> Good luck! Remember to commit early and often.
        </div>
      </footer>
    </div>
  );
}
