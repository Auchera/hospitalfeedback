import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Checkbox, FormControlLabel, IconButton } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

import VisibilityIcon from '@mui/icons-material/Visibility'; 


import { Close as CloseIcon } from '@mui/icons-material';

const HomePage = () => {
  const [isChecked, setIsChecked] = useState(false);

  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
    setShowWarning(false); 
  };

  const handlePopupToggle = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  const handleWarningDisplay = () => {
    if (!isChecked) {
      setShowWarning(true);
    }
  };

  return (
    <div className="bg-[#243240] text-smoke-white h-screen flex flex-col items-center justify-center font-roboto">

      <h1 className="text-white text-3xl mb-4">RACCOON CITY ÖZEL HASTANESİ</h1>
      <img src="/images/hastaneicon.png" alt="Hastane Logo" className="mx-auto mb-4" />


      <hr className="w-4/5 border-t-2 border-white my-4" />


      <div className="flex justify-between space-x-20 mb-10"> 
        <Link 
          to={isChecked ? "/oneri" : "#"} 
          className={`flex flex-col items-center ${!isChecked ? 'cursor-not-allowed opacity-50' : ''}`} 
          onClick={isChecked ? undefined : handleWarningDisplay}
        >
          <img src="/images/oneri.png" alt="Öneri" className="w-24 h-24" />
          <ArrowUpwardIcon className="text-white mt-2" />
          <p className="text-white mt-2 text-xl">Öneri</p>
        </Link>



        <Link 
          to={isChecked ? "/sikayet" : "#"} 
          className={`flex flex-col items-center ${!isChecked ? 'cursor-not-allowed opacity-50' : ''}`} 
          onClick={isChecked ? undefined : handleWarningDisplay}
        >
          <img src="/images/sikayet.png" alt="Şikayet" className="w-24 h-24 ml-6" />
          <ArrowUpwardIcon className="text-white mt-2" />
          <p className="text-white mt-2 text-xl">Şikayet</p>
        </Link>



        <Link 
          to={isChecked ? "/memnuniyet" : "#"} 
          className={`flex flex-col items-center ${!isChecked ? 'cursor-not-allowed opacity-50' : ''}`} 
          onClick={isChecked ? undefined : handleWarningDisplay}
        >
          <img src="/images/memnuniyet.png" alt="Memnuniyet" className="w-24 h-24" />
          <ArrowUpwardIcon className="text-white mt-2" />
          <p className="text-white mt-2 text-xl">Memnuniyet</p>
        </Link>
      </div>



      <div className="flex items-center mb-4">
        <FormControlLabel
          control={
            <Checkbox
              checked={isChecked}
              onChange={handleCheckboxChange}
              color="primary"
            />
          }
          label={
            <span className="text-white text-sm">
              Hasta Aydınlatma Metni'ni okudum ve onaylıyorum.
            </span>
          }
        />
        <IconButton onClick={handlePopupToggle}>
          <VisibilityIcon className="text-white" />
        </IconButton>
      </div>


      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 w-[80%] max-w-4xl h-[70%] overflow-y-auto rounded-lg">
            <h2 className="font-bold text-2xl mb-4 text-center text-decoration-underline">Hasta Aydınlatma Metni</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi nam voluptate neque adipisci aperiam, dolore cupiditate saepe libero minima, doloribus qui eum quae sed accusantium delectus quam ut culpa magnam placeat. Eaque quam, nihil in itaque maxime aliquam ut quia? Cupiditate veniam autem, accusantium quis, recusandae maxime earum quisquam voluptatum sit adipisci excepturi ut porro, nisi libero eaque magnam fugit quibusdam nostrum illum. Impedit, sint quos. Voluptatibus nam, expedita alias error eos veritatis totam culpa a earum voluptatum odit vitae dolore debitis eveniet tempore perferendis deserunt temporibus dolores autem impedit soluta ad tempora. Dolore aliquid in debitis animi, ducimus repellendus beatae illo dolorum est assumenda pariatur odio ad, nihil, eveniet error exercitationem iusto porro tempora molestias dolores obcaecati sunt itaque cumque? Eaque delectus similique cum ratione recusandae quasi labore tempora, porro natus illum numquam placeat est nostrum corporis dolores. Ipsa error molestiae omnis nobis. Excepturi minima doloremque beatae amet eos doloribus blanditiis sunt provident! Quas ea quasi expedita, assumenda in eligendi nobis corporis, repellendus ullam sed recusandae necessitatibus possimus neque rerum aliquid atque sunt, alias distinctio reiciendis voluptates maiores hic iusto! Repellendus, laboriosam velit exercitationem debitis quae dicta? Nobis omnis aut sit aliquam velit nulla hic aliquid dolore ex illum praesentium assumenda quis dicta vel ipsum natus aspernatur fuga quam tenetur adipisci ut, consequatur laudantium. Assumenda asperiores exercitationem eaque quasi quibusdam, ipsam laboriosam qui blanditiis, amet nihil pariatur eligendi minus quaerat! Fuga odio neque perspiciatis natus eum optio at quidem earum illo est. Ipsa eligendi nemo porro voluptatibus earum odio nisi ratione, sapiente ut. Architecto voluptate doloribus, beatae, maiores maxime atque aut qui, vel natus omnis temporibus! Impedit nihil modi saepe velit. Perferendis nulla incidunt, laudantium vitae sequi earum ratione dolor dolore optio nostrum officiis excepturi odio quae nisi accusamus obcaecati esse itaque error veniam ut saepe commodi quod laborum. Quisquam a ullam explicabo labore aperiam architecto quis eaque pariatur! Tempora odit iusto nobis deserunt voluptate beatae, nostrum at repellat doloribus officiis tenetur dicta. Accusamus aspernatur nisi veritatis nostrum deserunt porro expedita culpa aut numquam asperiores eligendi laboriosam, quae blanditiis magnam dicta dolor qui fugit quidem rerum vitae natus odit. Veritatis molestias, delectus suscipit molestiae, id ipsum, voluptatem quod placeat quaerat mollitia ratione rem ab consectetur magni expedita adipisci dolorem. Nihil laudantium, dolorum quos, nam iusto at architecto sed atque, pariatur facere maiores consequatur. Animi cumque voluptatem incidunt minima voluptates aut repellat, eius neque pariatur nulla at obcaecati accusantium vel voluptatum ullam architecto atque placeat praesentium vero dolore, ad deleniti nihil cum tempore. Neque et nesciunt sunt debitis sit aperiam nobis aut molestiae dolores vero corrupti odit laudantium fugiat, cupiditate sed dolor cumque ipsa inventore facilis ipsum distinctio omnis eos? Mollitia ab eius odio cupiditate modi? Nobis a veritatis delectus maxime quas molestiae aspernatur enim, quaerat ipsam, mollitia nemo harum magni. Veniam molestiae quam alias numquam sequi laudantium fugit accusamus minima nam modi, molestias vero iusto commodi officia, exercitationem recusandae labore cupiditate, aut dolorem quae minus! Eligendi quasi hic dolores ut eaque vero natus magnam atque, consectetur ducimus tempora qui sed quos magni culpa officiis ipsa nesciunt odit provident harum enim accusantium perspiciatis. Voluptate est eaque obcaecati maiores sunt! Autem maxime, amet expedita labore rem at fugit aspernatur obcaecati porro placeat possimus ut maiores quia quidem non quas dolorum animi officia tempore eveniet tenetur saepe provident perferendis. Distinctio quia error tenetur sed ullam! Cumque nihil accusamus unde natus? Rem doloribus illo corporis maxime ut repellat harum ad quod dolorem nulla incidunt nisi minus delectus, dicta, quidem nobis facilis nam beatae officiis possimus, et dignissimos. Autem perspiciatis ex quod tenetur corporis suscipit adipisci voluptatem cumque ut totam, at enim eaque quasi natus eum commodi tempora facilis? Voluptates assumenda, asperiores quis necessitatibus dignissimos doloremque molestiae dicta saepe atque nisi commodi repudiandae non repellat distinctio consequuntur, nihil qui odit labore unde illum accusantium accusamus! Inventore aliquam repellat laboriosam laborum accusantium magni voluptates minima dolor aut. Culpa vero blanditiis vitae. Aspernatur non aut temporibus iure esse nulla maxime distinctio laboriosam odio soluta! Culpa, tempora nulla temporibus numquam ab ipsum unde, repellendus, alias distinctio porro voluptas! Vero sit iste aut repellat a, quas necessitatibus natus, magnam nulla assumenda eaque, illum provident maxime asperiores est exercitationem suscipit mollitia. Ipsum necessitatibus architecto ea possimus? Doloribus, blanditiis delectus!
            </p>
            <IconButton onClick={handlePopupToggle}>
              <CloseIcon />
            </IconButton>
          </div>
        </div>
      )}


      {showWarning && !isChecked && (
        <div className="fixed top-4 right-4 bg-red-500 text-white py-2 px-4 rounded-md">
          Lütfen Hasta Aydınlatma Metni'ni onaylayın.
        </div>
      )}

      <p className="text-white mt-8 text-center">
        Size ve hastanemizden aldığınız hizmete ilişkin düşüncelerinize değer
        veriyoruz. Düşünce Kutusu uygulamasına bıraktığınız mesajlar, en etkili
        ve hızlı şekilde değerlendirilmektedir.
      </p>
    </div>
  );
};

export default HomePage;
