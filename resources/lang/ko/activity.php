<?php

/**
 * Contains all of the translation strings for different activity log
 * events. These should be keyed by the value in front of the colon (:)
 * in the event name. If there is no colon present, they should live at
 * the top level.
 */
return [
    'auth' => [
        'fail' => '로그인 실패',
        'success' => '로그인 성공',
        'password-reset' => '비밀번호 재설정',
        'reset-password' => '비밀번호 재설정 요청',
        'checkpoint' => '이중 인증 요청',
        'recovery-token' => '이중 인증 복구 토큰 사용',
        'token' => '이중 인증 문제 해결',
        'ip-blocked' => ':identifier에 대한 요청이 차단되었습니다',
        'sftp' => [
            'fail' => 'SFTP 로그인 실패',
        ],
    ],
    'user' => [
        'account' => [
            'email-changed' => ':old에서 :new로 이메일 변경',
            'password-changed' => '비밀번호 변경',
        ],
        'api-key' => [
            'create' => '새 API 키 :identifier 생성',
            'delete' => 'API 키 :identifier 삭제',
        ],
        'ssh-key' => [
            'create' => '계정에 SSH 키 :fingerprint 추가',
            'delete' => '계정에서 SSH 키 :fingerprint 제거',
        ],
        'two-factor' => [
            'create' => '이중 인증 활성화',
            'delete' => '이중 인증 비활성화',
        ],
    ],
    'server' => [
        'reinstall' => '서버 재설치',
        'console' => [
            'command' => '서버에서 ":command" 명령 실행',
        ],
        'power' => [
            'start' => '서버 시작',
            'stop' => '서버 중지',
            'restart' => '서버 재시작',
            'kill' => '서버 프로세스 종료',
        ],
        'backup' => [
            'download' => ':name 백업 다운로드',
            'delete' => ':name 백업 삭제',
            'restore' => ':name 백업 복원 (삭제된 파일: :truncate)',
            'restore-complete' => ':name 백업 복원 완료',
            'restore-failed' => ':name 백업 복원 실패',
            'start' => '새 백업 :name 시작',
            'complete' => ':name 백업 완료로 표시',
            'fail' => ':name 백업 실패로 표시',
            'lock' => ':name 백업 잠금',
            'unlock' => ':name 백업 잠금 해제',
        ],
        'database' => [
            'create' => '새 데이터베이스 :name 생성',
            'rotate-password' => '데이터베이스 :name의 비밀번호 변경',
            'delete' => '데이터베이스 :name 삭제',
        ],
        'file' => [
            'compress_one' => ':directory:file 압축',
            'compress_other' => ':directory에서 :count개의 파일 압축',
            'read' => ':file 내용 보기',
            'copy' => ':file 복사본 생성',
            'create-directory' => ':directory:name 디렉토리 생성',
            'decompress' => ':directory에서 :files 압축 해제',
            'delete_one' => ':directory:files.0 삭제',
            'delete_other' => ':directory에서 :count개의 파일 삭제',
            'download' => ':file 다운로드',
            'pull' => ':url에서 :directory로 원격 파일 다운로드',
            'rename_one' => ':directory:files.0.from을 :directory:files.0.to로 이름 변경',
            'rename_other' => ':directory에서 :count개의 파일 이름 변경',
            'write' => ':file에 새 내용 작성',
            'upload' => '파일 업로드 시작',
            'uploaded' => ':directory:file 업로드 완료',
        ],
        'sftp' => [
            'denied' => '권한 문제로 SFTP 접근 차단',
            'create_one' => ':files.0 생성',
            'create_other' => ':count개의 새 파일 생성',
            'write_one' => ':files.0 내용 수정',
            'write_other' => ':count개의 파일 내용 수정',
            'delete_one' => ':files.0 삭제',
            'delete_other' => ':count개의 파일 삭제',
            'create-directory_one' => ':files.0 디렉토리 생성',
            'create-directory_other' => ':count개의 디렉토리 생성',
            'rename_one' => ':files.0.from을 :files.0.to로 이름 변경',
            'rename_other' => ':count개의 파일 이름 변경 또는 이동',
        ],
        'allocation' => [
            'create' => '서버에 :allocation 추가',
            'notes' => ':allocation의 노트를 ":old"에서 ":new"로 업데이트',
            'primary' => ':allocation을 서버의 기본 할당으로 설정',
            'delete' => ':allocation 할당 삭제',
        ],
        'schedule' => [
            'create' => ':name 일정 생성',
            'update' => ':name 일정 업데이트',
            'execute' => ':name 일정 수동 실행',
            'delete' => ':name 일정 삭제',
        ],
        'task' => [
            'create' => ':name 일정에 새 ":action" 작업 생성',
            'update' => ':name 일정의 ":action" 작업 업데이트',
            'delete' => ':name 일정의 작업 삭제',
        ],
        'settings' => [
            'rename' => '서버 이름을 :old에서 :new로 변경',
            'description' => '서버 설명을 :old에서 :new로 변경',
        ],
        'startup' => [
            'edit' => ':variable 변수를 ":old"에서 ":new"로 변경',
            'image' => '서버의 Docker 이미지 :old를 :new로 업데이트',
        ],
        'subuser' => [
            'create' => ':email을(를) 하위 사용자로 추가',
            'update' => ':email의 하위 사용자 권한 업데이트',
            'delete' => ':email을(를) 하위 사용자에서 제거',
        ],
    ],
];
