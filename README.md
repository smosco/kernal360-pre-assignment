## 2️⃣ 사전과제 회고하기

### 🛠 컴포넌트 설계 시 고려했던 부분

- **UI 코드 중복 최소화**: 공통 컴포넌트로 분리
- **단일 책임 원칙**: 각 컴포넌트가 하나의 역할만 수행하도록 설계해 가독성 및 유지 보수성을 고려
- **확장성**: 미래에 추가될 데이터나 요구사항을 유연하게 반영할 수 있도록 컴포넌트 설계

---

### 📂 폴더 구조 및 컴포넌트 구조 요약

#### 폴더 구조 요약

1. **common**: 여러 페이지에서 재사용될 수 있는 공통 UI 컴포넌트
2. **components**: 
    - **Header**: 헤더 관련 컴포넌트
    - **OrderList**: 주문 목록 관련 컴포넌트
    - **RecentOrders**: 최근 주문 목록 관련 컴포넌트
    - **Sidebar**: 사이드바 관련 컴포넌트
3. **pages**: 페이지 컴포넌트
    - **Dashboard** 페이지 컴포넌트
4. **lib**: 유틸리티 함수 모음

```bash
src/
│
├── common/
│   ├── UserProfile
│   ├── Icon.jsx
│   ├── OrderHeader.jsx
├── components/
│   ├── Header/
│   ├── OrderList/
│   ├── RecentOrders/
│   ├── Sidebar/
├── data/
├── lib/
├── pages/
│   ├── Dashboard/
└── GlobalStyles.js
```

---

### 💡 왜 이렇게 설계했나요?

- **UI 코드 중복 최소화**: 
    - 주문 상태 버튼 UI, 주문 번호와 유저 이미지를 보여주는 주문 헤더 UI, 아이콘 등 공통적인 UI 요소를 컴포넌트로 분리해 여러 페이지에서 재사용 가능
- **단일 책임 원칙**: 
    - `OrderList`: 전체 주문 목록 관리 및 `Order` 컴포넌트 렌더링
    - `Order`: 각 주문에 대한 세부 정보 처리
    - `OrderItem`: 개별 상품 정보 렌더링
- **확장성 고려**: 
    - `OrderItem` 컴포넌트가 받는 props를 확장 가능하게 설계해 향후 할인 가격이나 세일 상태를 추가하기 쉽게 함

---

### 🔄 내가 만든 컴포넌트들의 재사용성에 대해 스스로 평가해보기

- **단일 책임 원칙**: 각 컴포넌트가 명확한 역할을 담당하여 다른 프로젝트에서도 쉽게 재사용 가능
- **데이터 유연성**: `OrderItem`의 props 구조를 확장 가능하게 설계하여 다양한 상황에 대응할 수 있음
- **스타일링 유연성**: `titleFontSize`와 `dateFontSize` 같은 스타일 관련 props를 받아 컴포넌트를 다양한 페이지에서 유연하게 사용 가능
- **반복 사용 가능성**: `OrderHeader`, `Icon`, `UserProfile` 등의 컴포넌트는 여러 페이지에서 재사용 가능

---

### 🤔 컴포넌트를 설계하며 어려웠던 점

- **주문 요청 상태별 버튼 UI 구현**: 대기 중, 수락, 거절 상태에 따라 다른 UI를 적용해야 했습니다.
    
    **수정 전**: 상태에 따라 버튼과 아이콘을 중복해서 렌더링하는 코드가 많았습니다.

    ```jsx
    <ButtonContainer>
      {status === 'waiting' ? (
        <>
          <button className='waiting rejected'>
            <Icon name='X' color='#DB79A9' />
          </button>
          <button className='waiting completed'>
            <Icon name='Check' color='#87B6A1' />
          </button>
        </>
      ) : (
        <button className={status}>
          <Icon name={status === 'completed' ? 'Check' : 'X'}
                color={status === 'completed' ? '#87B6A1' : '#DB79A9'} />
          {status.toUpperCase()}
        </button>
      )}
    </ButtonContainer>
    ```

    **수정 후**: 중복된 버튼 UI 코드를 하나의 함수로 처리하여 상태에 따라 다른 버튼을 렌더링했습니다.

    ```jsx
    const renderButton = (buttonStatus, isConfirmed = false) => (
      <button className={buttonStatus}>
        <Icon name={buttonStatus === 'completed' ? 'Check' : 'X'}
              color={buttonStatus === 'completed' ? '#87B6A1' : '#DB79A9'} />
        {isConfirmed && buttonStatus.toUpperCase()}
      </button>
    );
    ```

    이렇게 함으로써 코드 중복을 줄이고 가독성을 높였습니다.

---

### 📌 어렵게 느껴진 점

- **비슷한 UI를 공통 컴포넌트로 추출하는 방법**: `OrderHeader`처럼 UI가 거의 같지만 일부 스타일만 다른 컴포넌트를 어떻게 추출할지 고민이 많았는데, 외부에서 스타일링 관련 props를 전달해 코드 중복을 줄이는 방법을 알게 되었습니다.

### 📌 새롭게 알게된 점

- **미래의 데이터 변경 대비**: `OrderItem` 컴포넌트를 확장 가능한 구조로 설계해 향후 데이터가 변경되더라도 유연하게 대응할 수 있도록 해야 한다는 점을 배웠습니다.
