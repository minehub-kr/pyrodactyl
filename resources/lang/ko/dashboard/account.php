<?php

return [
    'email' => [
        'title' => '이메일 업데이트',
        'updated' => '이메일 주소가 업데이트되었습니다.',
    ],
    'password' => [
        'title' => '비밀번호 변경',
        'requirements' => '새 비밀번호는 최소 8자 이상이어야 합니다.',
        'updated' => '비밀번호가 업데이트되었습니다.',
    ],
    'two_factor' => [
        'button' => '2단계 인증 설정',
        'disabled' => '계정에서 2단계 인증이 비활성화되었습니다. 로그인 시 더 이상 토큰을 제공할 필요가 없습니다.',
        'enabled' => '계정에서 2단계 인증이 활성화되었습니다! 이제 로그인할 때 기기에서 생성된 코드를 제공해야 합니다.',
        'invalid' => '제공된 토큰이 유효하지 않습니다.',
        'setup' => [
            'title' => '2단계 인증 설정',
            'help' => '코드를 스캔할 수 없습니까? 아래 코드를 애플리케이션에 입력하세요:',
            'field' => '토큰 입력',
        ],
        'disable' => [
            'title' => '2단계 인증 비활성화',
            'field' => '토큰 입력',
        ],
    ],
];
