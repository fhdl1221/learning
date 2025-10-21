import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="flex-grow">
      {/* Home Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center bg-blue-50">
        <div className="max-w-7xl mx-auto px-8 text-center text-text-primary">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
            AI Memo Management
          </h1>
          <p className="text-2xl font-semibold lg:text-2xl mt-5">
            AI로 더 스마트하게 메모 관리하기
          </p>
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            할 일을 AI가 한눈에 보기 쉬운 메모로 정리해드려요. <br />
            저장하고, 확인하고, 진행 상황을 손쉽게 관리하세요.
          </p>
          <button
            onClick={() => navigate("/chat")}
            className="mt-8 rounded-lg bg-blue-900 px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            지금 시작하기
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary">주요 기능</h2>
            <p className="mt-4 text-lg text-text-secondary">
              MemoAI로 더 효율적이고 체계적인 하루를 만들어보세요.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 p-8">
            {/* Feature 1 */}
            <div className="flex flex-col gap-4 rounded-xl bg-background-card bg-gray-50 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                📝
              </div>
              <h3 className="text-xl font-bold text-text-primary">AI 요약</h3>
              <p className="text-text-secondary text-gray-600">
                AI가 당신의 할 일을 분석해 핵심만 깔끔하게 정리된 메모로
                만들어드립니다.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-4 rounded-xl bg-background-card bg-gray-50 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                📋
              </div>
              <h3 className="text-xl font-bold text-text-primary">메모 목록</h3>
              <p className="text-text-secondary text-gray-600">
                저장된 메모를 한눈에 확인하고, 검색 및 정렬로 빠르게 찾아보세요.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex flex-col gap-4 rounded-xl bg-background-card bg-gray-50 p-6 shadow-sm">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                ✅
              </div>
              <h3 className="text-xl font-bold text-text-primary">진행 관리</h3>
              <p className="text-text-secondary text-gray-600">
                메모를 완료/미완료로 표시해 진행 상황을 명확하게 관리하세요.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 sm:py-24 bg-background-card bg-blue-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-text-primary">이용 방법</h2>
            <p className="mt-4 text-lg text-text-secondary">
              세 단계로 끝내는 간단한 생산성 향상 루틴!
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-0 -ml-px h-full w-0.5 bg-gray-200 hidden md:block"
            ></div>
            <div className="space-y-12 md:space-y-16">
              {/* Step 1 */}
              <div className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-8">
                <div className="flex flex-col items-center md:items-end md:text-right">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    📝
                  </div>
                  <div className="ml-4 md:ml-0 md:mt-4">
                    <h3 className="text-xl font-bold text-text-primary">
                      할 일 입력하기
                    </h3>
                    <p className="mt-2 text-text-secondary text-gray-600">
                      해야 할 일을 간단히 텍스트로 입력하세요.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 2 */}
              <div className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-8">
                <div className="md:col-start-2 flex flex-col items-center md:items-start">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    📋
                  </div>
                  <div className="ml-4 md:ml-0 md:mt-4">
                    <h3 className="text-xl font-bold text-text-primary">
                      AI 요약하기
                    </h3>
                    <p className="mt-2 text-text-secondary text-gray-600">
                      AI가 입력한 내용을 분석해 핵심 메모를 자동으로
                      만들어드립니다.
                    </p>
                  </div>
                </div>
              </div>
              {/* Step 3 */}
              <div className="relative flex items-start md:grid md:grid-cols-2 md:gap-x-8">
                <div className="flex flex-col items-center md:items-end md:text-right">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-white">
                    ✅
                  </div>
                  <div className="ml-4 md:ml-0 md:mt-4">
                    <h3 className="text-xl font-bold text-text-primary">
                      메모 관리하기
                    </h3>
                    <p className="mt-2 text-text-secondary text-gray-600">
                      생성된 메모를 저장하고, 확인하며, 진행 상황을 관리하세요.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 text-center">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-text-primary">
            지금 바로 시작해보세요!
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary text-gray-600">
            AI가 도와주는 스마트한 메모 관리, 직접 경험해보세요.
          </p>
          <button
            onClick={() => navigate("/chat")}
            className="mt-8 rounded-lg bg-blue-900 px-6 py-3 text-base font-bold text-white shadow-lg transition-transform hover:scale-105"
          >
            첫 번째 메모 만들기
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background-light border-t border-gray-200/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col items-center gap-8">
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <a
                href="#"
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                About
              </a>
              <a
                href="#"
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-sm text-text-secondary hover:text-primary transition-colors"
              >
                Contact
              </a>
            </nav>
            <p className="text-sm text-text-secondary">
              © 2025 MemoAI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
