import Download from '@assets/svg/Download.svg?react';

type TList = {
  id: number;
  companyName: string;
  fileUrl: string;
};

const ListTable = () => {
  const lists: Array<TList> = [
    {
      id: 1,
      companyName: '안녕컴퍼니',
      fileUrl: '',
    },
    {
      id: 11,
      companyName: '산들컴퍼니',
      fileUrl: '',
    },
  ];
  const handleFileDownload = (url: string) => {
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="relative overflow-x-auto w-1/2">
        <table className="w-full text-sm text-center text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="bg-neutral-100 text-center">
              <th scope="col" className="px-3 py-3 w-1/6">
                NO
              </th>
              <th scope="col" className="px-4 py-3 w-1/3">
                회사명
              </th>
              <th scope="col" className="px-3 py-3 w-1/6">
                파일
              </th>
              <th scope="col" className="px-4 py-3 w-1/3"></th>
            </tr>
          </thead>
          <tbody>
            {lists.length > 0 ? (
              lists.map((list, index) => (
                <tr
                  key={list.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-3 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {index + 1}
                  </th>
                  <td className="px-4 py-4 text-center">{list.companyName}</td>
                  <td className="px-3 py-4 text-center">
                    <Download
                      className="inline-block cursor-pointer"
                      onClick={() => handleFileDownload(list.fileUrl)}
                    />
                  </td>
                  <td className="px-4 py-4 text-center flex justify-center gap-2">
                    <div
                      className="min-w-20 bg-neutral-500 text-center text-white hover:bg-main-color rounded-2xl py-1 m-2 cursor-pointer"
                      onClick={() => alert('승낙버튼!')}
                    >
                      수락
                    </div>
                    <div
                      className="min-w-20 bg-neutral-500 text-center text-white hover:bg-main-color rounded-2xl py-1 m-2 cursor-pointer"
                      onClick={() => alert('취소버튼!')}
                    >
                      취소
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="pt-10 text-center">
                  신청한 일정이 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListTable;
