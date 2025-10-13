# git branch

### 브랜치 명령어

### `git branch`

- git의 프로젝트의 브랜치 목록 출력

### `git branch <브랜치명>`

- 새로운 브랜치 생성

### `git switch <브랜치명>`

- 브랜치 전환
- 작업 공간 변경

### 서브(기능) 브랜치 워크플로우

1. 브랜치 생성 `git branch <브랜치명>`
2. 브랜치 전환 `git switch <브랜치명>`
3. 작업
4. `git add .`
5. `git commit -m "commit-message"`
6. 브랜치 전환 `git switch main`
7. 브랜치 병합 `git merge <브랜치명>`
8. (선택)브랜치 삭제 `git branch -d <브랜치명>`
  - 추후 문제 발생 가능성 : 동일한 브랜치명을 사용하지 못한다는 문제

### `git branch -d <브랜치명>`

- 병합이 된 브랜치만 삭제

### `git branch -D <브랜치명>`

- 병합이 안된 브랜치도 삭제(강제 삭제)
- 조심히 사용

### GitHub 병합 워크플로우
1. 브랜치 생성 `git branch <브랜치명>`
2. 브랜치 전환 `git switch <브랜치명>`
3. 작업
4. `git add .`
5. `git commit -m "커밋 메세지"`
6. `git push origin [현재 브랜치명]`
7. GitHub 저장소 접속
8. GitHub 병합 처리
  1. 상단 Pull requests 클릭
  2. New Pull request 클릭
  3. compare를 병합 대상이 될 브랜치로 변경
  4. Create Pull Request 클릭
  5. pull request에 대한 제목과 내용(마크다운 가능) 입력(중요: 팀원들과 작업 내용을 공유하기 위한 설명)
  6. Create pull request 클릭 
  7. 코드 검토(리뷰)
  8. 3개의 병합 방법 중 하나를 선택해서 병합 처리
  9. 브랜치 삭제
  10. (로컬)git switch main
  11. (로컬)git pull origin main
  