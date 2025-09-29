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
